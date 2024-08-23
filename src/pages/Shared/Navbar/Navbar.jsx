import { Link, NavLink } from "react-router-dom";
import defaultUserIcon from "../../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
     const { user, logOut } = useContext(AuthContext);

     // log Out
     const handelLogOut = () => {
          logOut()
               .then(() => {
                    toast.success('LogOut Successfully !!')

               })
               .catch((error) => {
                    const errorMessage = error.message;
                    toast.error(errorMessage)
               })
     }
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
                    {
                         user ? <button onClick={handelLogOut} className="btn btn-accent px-6 py-0">LogOut</button>
                              : <Link to={"/login"}>
                                   <button className="btn btn-accent px-6 py-0">Login</button>
                              </Link>
                    }
               </div>
          </div>
     );
};

export default Navbar;