import React, { useState, useRef } from 'react';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from '../app/firebase'; 
import { toast } from "react-toastify";
import Spinner from './Spinnet'; 
import { useDispatch, useSelector } from "react-redux";
import { logOut, setCredential } from '../slices/authSlice';
import { useSetProfileMutation } from '../slices/userApiSlice';
import { MdEdit, MdFileUpload } from "react-icons/md";
import { CiLogin } from "react-icons/ci";


const Banner = () => {
  // Redux state to get user information
  const { userInfo } = useSelector((state) => state.auth);

  // State variables for user profile and banner images and their previews
  const [userImg, setUserImg] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [bannerImg, setBannerImg] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);
  const [isSubmit, setSubmit] = useState(false);

  // Refs for file input elements
  const fileInputRef = useRef(null);
  const bannerInputRef = useRef(null);

  // Redux mutation hook for setting profile
  const [addProfile] = useSetProfileMutation();
  const dispatch = useDispatch();

  // Handle file input click
  const handleFileClick = (type) => {
    if (type === 'profile') {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    } else if (type === 'banner') {
      if (bannerInputRef.current) {
        bannerInputRef.current.click();
      }
    }
  };

  // Handle file selection and validate image files
  const handleFileChange = (event, type) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate if the selected file is an image
      if (!file.type.startsWith('image/')) {
        toast.error("Please select a valid image file");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'profile') {
          setUserImg(file);
          setImagePreview(reader.result);
        } else if (type === 'banner') {
          setBannerImg(file);
          setBannerPreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      if (type === 'profile') {
        setImagePreview(null);
      } else if (type === 'banner') {
        setBannerPreview(null);
      }
    }
  };

  // Handle image upload and update profile/banner image
  const handleImageChange = async (type) => {
    setSubmit(true);
    const fileName = `${Date.now()}.jpg`;
    let storageRef;

    // Set the storage reference based on image type
    if (type === 'profile') {
      storageRef = ref(storage, `/images/userProfile/${fileName}`);
    } else if (type === 'banner') {
      storageRef = ref(storage, `/images/userBanner/${fileName}`);
    }
    
    const file = type === 'profile' ? userImg : bannerImg;
    
    if (file) {
      try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        const _id = userInfo?._id;
        const updateData = type === 'profile' ? { profileImg: downloadURL, _id } : { bannerImg: downloadURL, _id };
        const res = await addProfile(updateData).unwrap();
        setSubmit(false);
        toast.success("Image Updated Successfully");
        dispatch(setCredential({ ...res }));
        if (type === 'profile') {
          setImagePreview("");
        } else if (type === 'banner') {
          setBannerPreview("");
        }
      } catch (err) {
        toast.error(err.data?.message || err.error);
        setSubmit(false);
      }
    }
  };

  const logoutHandler = async () => {
    try {
      dispatch(logOut());
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-48 bg-black relative rounded-t-lg">
      <img className="w-full object-cover h-48 rounded-t-lg relative"
       src={bannerPreview || userInfo?.bannerImg || "/Images/banner-sample.jpg"} alt="" />
       {bannerPreview ? 
        <button onClick={() => handleImageChange('banner')} className='rounded-full bg-white h-7 w-7 absolute top-3 right-3 flex justify-center items-center'>
        {isSubmit ? <Spinner /> : <MdFileUpload color='blue' size={18}/>}
       </button>
       :
       <button onClick={() => handleFileClick('banner')} className='rounded-full bg-white h-7 w-7 absolute top-3 right-3 flex justify-center items-center'>
        <MdEdit size={18} color='blue'/>
       </button>
       }
       <button onClick={logoutHandler} className='absolute right-5 border-[2px] rounded-full p-2 mt-5'>
        <CiLogin size={18} color='red'/>
       </button>
      <div className="rounded-full absolute bottom-[-25%] left-10">
        <img
          className="border-[5px] border-white rounded-full h-44 w-44 object-cover cursor-pointer"
          src={imagePreview || userInfo?.profileImg || "/Images/addProfile.png"}
          alt=""
          onClick={() => handleFileClick('profile')}
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(event) => handleFileChange(event, 'profile')}
          style={{ display: "none" }}
        />
        <input
          ref={bannerInputRef}
          type="file"
          accept="image/*"
          onChange={(event) => handleFileChange(event, 'banner')}
          style={{ display: "none" }}
        />
        {imagePreview && (
          <div className="flex justify-center mt-3 mb-3">
            <button
              onClick={() => handleImageChange('profile')}
              className="bg-white hover:bg-green-400 flex justify-center items-center text-black rounded-full shadow-md w-8 h-8 font-medium absolute bottom-10"
            >
              {isSubmit ? <Spinner/> : <MdFileUpload/>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
