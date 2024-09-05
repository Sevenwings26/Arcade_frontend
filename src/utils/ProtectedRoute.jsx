import React, { useContext } from 'react'
import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({children}) => {

    let {user} = useContext(AuthContext)
    if (!user){
        console.log("No user authentication")
        return <Navigate to="/login" replace />
    }   
  return children
}

export default ProtectedRoute
