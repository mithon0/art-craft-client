import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
  
        const {user,loading}=useContext(AuthContext)
       
        if(user?.email){
            return children
        }
       
            
       
        if(loading==true){
            return <div><h1>please login</h1> <progress className=" text-center mx-auto progress w-56"></progress></div>
        }
        return <Navigate to="/login" replace></Navigate>
    
};

export default PrivetRoutes;