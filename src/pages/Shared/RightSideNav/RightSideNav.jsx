import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import qZoneImg1 from "../../../assets/qZone1.png";
import qZoneImg2 from "../../../assets/qZone2.png";
import qZoneImg3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
     return (
          <div>
               <div className="p-6 ">
                    <h1 className="text-xl mb-6 font-semibold">Login With</h1>
                    <button className="flex gap-2 mb-3 items-center w-full btn btn-outline btn-info text-base">
                         <FaGoogle></FaGoogle>
                         Login With Google
                    </button>
                    <button className="flex gap-2 items-center w-full btn btn-outline btn-success text-base">
                         <FaGithub></FaGithub>
                         Login With GitHub
                    </button>
               </div>
               <hr />
               <div className="p-6 ">
                    <h1 className="text-xl mb-6 font-semibold">Find Us On</h1>
                    <a className="flex gap-4 items-center border p-4 text-lg font-medium rounded-t-lg" href="">
                         <FaFacebook className="text-blue-400"></FaFacebook>
                         Facebook
                    </a>
                    <a className="flex gap-4 items-center border p-4 text-lg font-medium rounded-rl" href="">
                         <FaTwitter className="text-sky-500"></FaTwitter>
                         Twitter
                    </a>
                    <a className="flex gap-4 items-center border p-4 text-lg font-medium rounded-b-lg" href="">
                         <FaInstagram className="text-red-500"></FaInstagram>
                         Instagram
                    </a>
               </div>
               <div className="p-6 ">
                    <h1 className="text-xl mb-7 font-semibold">Q-Zone</h1>
                    <div className="px-2 py-4 ">

                         <img src={qZoneImg1} alt="" />
                         <h1 className="text-lg font-semibold mt-4 text-center mb-8">Swimming</h1>
                    </div>
                    <div className="px-2 py-4">

                         <img src={qZoneImg2} alt="" />
                         <h1 className="text-lg font-semibold mt-4 mb-8 text-center">Class</h1>
                    </div>
                    <div className="px-2 py-4">

                         <img src={qZoneImg3} alt="" />
                         <h1 className="text-lg font-semibold mt-4  mb-8 text-center">Play Ground</h1>
                    </div>
               </div>
          </div>
     );
};

export default RightSideNav;