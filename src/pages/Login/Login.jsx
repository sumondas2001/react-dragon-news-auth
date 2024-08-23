import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {
     const handelLogin = e => {
          e.preventDefault();

          const from = new FormData(e.currentTarget);
          console.log(from.get('email'))
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