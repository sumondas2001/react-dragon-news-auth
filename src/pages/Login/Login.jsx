import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";




const Login = () => {
     const location = useLocation();
     const navigate = useNavigate();
     const { userSignIn } = useContext(AuthContext)
     const handelLogin = e => {
          e.preventDefault();

          const from = new FormData(e.currentTarget);

          const email = from.get('email');
          const password = from.get('password');

          // sign In With Email And Password
          userSignIn(email, password)
               .then(() => {
                    // console.log(result.user)
                    toast.success("Login Successfully !!")
                    navigate(location?.state ? location.state : "/")

               })
               .catch((error) => {
                    toast.error(error.message);
               })
     }
     return (
          <div>
               <Navbar></Navbar>
               <div>
                    <h2 className="text-xl text-center font-bold my-10">Login your account</h2>
                    <div className="card bg-base-100  shrink-0 shadow-2xl lg:w-1/2 md:1/3 mx-auto">
                         <form onSubmit={handelLogin} className="card-body ">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" placeholder="Enter your email address" name="email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input type="password" placeholder="Enter your password" name="password" className="input input-bordered" required />
                                   <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                   </label>
                              </div>
                              <div className="form-control mt-6">
                                   <button className="btn btn-success">Login</button>
                              </div>
                         </form>
                         <h1 className="text-center mb-10">
                              Dont’t Have An Account ? <Link className="text-lg font-bold text-blue-700 underline" to={"/register"}>Register</Link>
                         </h1>
                    </div>
               </div>

          </div>
     );
};

export default Login;