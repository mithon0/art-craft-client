import React from 'react';
import {createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main/Main';
import Home from '../pages/Home/Home/Home';
import Error from '../pages/Error/Error';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Instructors from '../pages/Instructors/Instructors';
import Dashboard from '../Layout/Dashboard/Dashboard';
import Users from '../pages/Users/Users';


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<SignUp></SignUp>
        },
        {
          path:'instructor',
          element:<Instructors></Instructors>
        }
      ]
     
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'dashboard/user',
          element:<Users></Users>
        }
      ]
    }

  ]);

export default router;