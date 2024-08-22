import { Link, NavLink } from "react-router-dom";
import defaultUserIcon from "../../../assets/user.png"

const Navbar = () => {
     return (
          <div className="flex justify-between mt-6 items-center">
               <div >
               </div>
               <div >
                    <ul className="flex gap-4">
                         <li className="font-medium"><NavLink to={"/"}>Home</NavLink></li>
                         <li className="font-medium"><NavLink to={"about"}>About</NavLink></li>
                         <li className="font-medium"><NavLink to={"career"}>Career</NavLink></li>

                    </ul>
               </div>
               <div className="flex gap-3">

                    <div className="size-10 rounded-lg ">
                         <img src={defaultUserIcon} alt="" />
                    </div>


                    <button className="btn btn-accent px-6 py-0">
                         <Link>Login</Link>
                    </button>
               </div>
          </div>
     );
};

export default Navbar;