import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { validationSchema } from "../validation/validation";
import { useDispatch, useSelector } from "react-redux";
import { setCredential } from "../slices/authSlice";
import { useEffect } from "react";

function Register() {
    const navigate = useNavigate()
    const [register] = useRegisterMutation();
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(()=>{
      if(userInfo){
          navigate('/home')
      }
  },[navigate, userInfo])

    const initialValues = {
        name: "",
        password: "",
        cpassword: "",
        email: "",
      };
    
      const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
          try {
            const { name, email,password} = values; // Destructure values
            const res = await register({ name, email,password }).unwrap();
            dispatch(setCredential({ ...res }));
            navigate("/home");
            toast.success('Successfully Registerd')
          } catch (err) {
            toast.error(err?.data?.message || err.error);
          }
        },
      });

    return (
      <div>
        <div className="flex w-screen flex-wrap text-slate-800">
          <div className="flex w-full flex-col md:w-1/2">
            <div className="flex justify-center pt-12 md:justify-start md:pl-12">
              <img className="w-28" src="/src/assets/icons/adhil-02.png" alt="" />
            </div>
            <div className="my-auto mx-auto flex flex-col justify-center px-6 md:justify-start lg:w-[28rem]">
              <p className="font-Sans text-primary text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
                Welcome <br />
                to <span className="text-yellow-500">Hackingly</span>
              </p>
              <p className="mt-6 text-center font-medium md:text-left">
                Register your account below.
              </p>
  
              <form className="flex flex-col items-stretch pt-3 md:pt-8" onSubmit={handleSubmit}>
                <div className="flex flex-col pt-4">
                  <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                    <input
                      value={values.name}
                      onChange={handleChange}
                      name="name"
                      placeholder="Name"
                      type="name"
                      className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  {errors.name && touched.name && (
                    <div className="text-red-500">{errors.name}</div>
                  )}
                </div>
                <div className="flex flex-col pt-4">
                  <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                    <input
                      value={values.email}
                      onChange={handleChange}
                      name="email"
                      placeholder="Email"
                      type="email"
                      className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  {errors.email && touched.email && (
                    <div className="text-red-500">{errors.email}</div>
                  )}
                </div>
                <div className="flex flex-col pt-4">
                  <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                    <input
                    value={values.password}
                    onChange={handleChange}
                      name="password"
                      placeholder="Password"
                      type="password"
                      className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  {errors.password && touched.password && (
                    <div className="text-red-500">{errors.password}</div>
                  )}
                </div>
                <div className="flex flex-col pt-4">
                  <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                    <input
                      value={values.cpassword}
                      onChange={handleChange}
                      name="cpassword"
                      placeholder="Confirm Password"
                      type="password"
                      className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  {errors.cpassword && touched.cpassword && (
                    <div className="text-red-500">{errors.cpassword}</div>
                  )}
                </div>
  
                <button
                  type="submit"
                  className="bg-primary hover:bg-black w-full text-white p-2 rounded-md mt-4"
                >
                  Sign in
                </button>
              </form>
              <div className="py-6 text-center">
                <p className="text-gray-600">
                  Already have an account?
                  <button
                   onClick={()=>navigate("/")}
                   className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4 hover:text-blue-500">
                    Sign in.
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="relative hidden h-screen select-non bg-primary bg-gradient-to-br md:block md:w-1/2">
            <div className="mt-16 px-8 text-white xl:w-[40rem]">
              <p className="my-6 text-3xl font-semibold leading-10">
                Connecting you to your dream career Empowering Minds with
                Technology - Dive into the Hackathon Revolution at Hackingly! Your
                Gateway to Innovation and Excitement
                <span className="abg-white whitespace-nowrap py-2 ml-2 text-yellow-500">
                  We'll achieve greatness.
                </span>
              </p>
            </div>
            <div className="flex justify-center mt-8">
              {/* <img
                className="ml-8 w-11/12 max-w-lg rounded-lg"
                src="/assets/img/workerLogin.png"
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Register;
  