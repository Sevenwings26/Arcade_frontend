import React, { useContext } from 'react'
import AuthContext from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";


const ProtectedRoute = ({children}) => {

    let {user} = useContext(AuthContext)
    if (!user){
        console.log("No user authentication")
        return <Navigate to="/login" replace />
    }   
  return children
}

export default ProtectedRoute

// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import AuthContext from "../context/AuthContext";
// import jwtDecode from 'jwt-decode';

// const ProtectedRoute = ({ children }) => {
//   const { user, authTokens } = useContext(AuthContext);

//   // Decode token and check expiration
//   const isTokenValid = () => {
//     if (!authTokens) return false;
//     const decodedToken = jwtDecode(authTokens.access);
//     const currentTime = Math.floor(Date.now() / 1000);
//     return decodedToken.exp > currentTime;
//   };

//   if (!user || !isTokenValid()) {
//     console.log("User not authenticated or token expired");
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

