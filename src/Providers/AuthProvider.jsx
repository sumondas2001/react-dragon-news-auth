import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.confige";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
     const [loading, setLoading] = useState(true);
     const [user, setUser] = useState(null);

     // crete User email and password

     const creteUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password)
     }

     // sign In With Email AndPassword
     const userSignIn = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password)
     }

     // log out
     const logOut = () => {
          setLoading(true);
          return signOut(auth)
     }






     // on Auth State Changed
     const unSubscribe = useEffect(() => {
          onAuthStateChanged(auth, currentUser => {
               setUser(currentUser);
               setLoading(false)
          }


          );
          return () => {
               unSubscribe
          }
     }, []);



     const authInfo = {
          user,
          creteUser,
          logOut,
          userSignIn,
          loading

     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;

AuthProvider.propTypes = {
     children: PropTypes.node,
}