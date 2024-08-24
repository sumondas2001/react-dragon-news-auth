import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

const PrivetRoutes = ({ children }) => {
     const { user, loading } = useContext(AuthContext);
     const location = useLocation();

     if (loading) {
          return <div className="w-full h-screen flex items-center justify-center ">

               <span className="loading loading-ring loading-lg size-10 text-blue-600 "></span>

          </div>
     }
     if (user) {
          return children;
     }
     return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivetRoutes;

PrivetRoutes.propTypes = {
     children: PropTypes.node,
}