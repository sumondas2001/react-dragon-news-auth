import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {
     const { creteUser } = useContext(AuthContext);
     const handelRegister = e => {

          e.preventDefault();

          const from = new FormData(e.currentTarget);
          const name = from.get('name');
          const photoURL = from.get('photoURL');
          const email = from.get('email');
          const password = from.get('password');
          console.log(name, photoURL, email, password);

          // crete User email and password
          creteUser(email, password)
               .then(() => {

                    toast.success("Register Successfully !!")
               })
               .catch(error => {
                    const errorMessage = error.message;
                    toast.error(errorMessage)
               })
     }
     return (
          <div>
               <Navbar></Navbar>
               <div className="mb-10">
                    <h2 className="text-xl text-center font-bold my-10">Register your account</h2>
                    <div className="card bg-base-100  shrink-0 shadow-2xl lg:w-1/2 md:1/3 mx-auto">
                         <form onSubmit={handelRegister} className="card-body ">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Your Name</span>
                                   </label>
                                   <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Photo URL</span>
                                   </label>
                                   <input type="text" placeholder="Photo URL" name="photoURL" className="input input-bordered" required />
                              </div>
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

                              </div>
                              <div className="form-control mt-6">
                                   <button className="btn btn-success">Register</button>
                              </div>
                         </form>
                         <h1 className="text-center mb-10">
                              Already Have An Account ? <Link className="text-lg font-bold text-blue-700 underline" to={"/login"}>Login</Link>
                         </h1>
                    </div>
               </div>

          </div>
     );
};

export default Register;