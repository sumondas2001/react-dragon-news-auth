import { Link } from "react-router-dom";


const ErrorPages = () => {
     return (
          <div className="flex text-center justify-center items-center w-full h-screen">
               <div className="bg-blue-900 px-32 shadow-xl py-10 rounded-2xl ">
                    <h1 className="text-2xl font-semibold mb-4">Oops!!!</h1>
                    <h1 className="text-2xl font-semibold mb-4">Go Back</h1>

                    <Link to={"/"}>
                         <button className="btn btn-success">Home</button>
                    </Link>
               </div>

          </div>
     );
};

export default ErrorPages;