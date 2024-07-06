import Banner from "../components/Banner"
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";



function Home() {
  return (
    <div>
        <div className="flex justify-center">
            <div className="w-3/4 shadow-lg mt-10">
            <Banner/>
            <div className="flex justify-between">
              <div className="mt-28 mb-10">
               <div>
                 <p className="font-semibold ml-5 text-2xl">Adhil Ali</p>
               </div>
               <div className="flex gap-3 p-5">
                <div><FaGithub size={20}/></div>
                <div><SiLeetcode size={20}/></div>
                <div><FaFacebookSquare size={20}/></div>
               </div>
              </div>
              <div className="mt-16 pr-20">
                <div className="flex gap-5">
                <div className="h-8 w-8 bg-black text-white"></div>
                <div>Brotorype</div>
                </div>
                <div className="flex gap-5 mt-3">
                <div className="h-8 w-8 bg-black text-white"></div>
                <div>Brotorype</div>
                </div>
                <div></div>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home