import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.confige";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

     const [user, setUser] = useState(null);

     // crete User email and password

     const creteUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     }

     // sign In With Email AndPassword
     const userSignIn = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }

     // log out
     const logOut = () => {
          return signOut(auth)
     }






     // on Auth State Changed
     const unSubscribe = useEffect(() => {
          onAuthStateChanged(auth, currentUser => {
               console.log('user in the state changed ', currentUser);
               setUser(currentUser);
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
          userSignIn

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