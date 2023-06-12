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

import Students from '../pages/Students/Students';
import PrivetRoutes from './PrivetRoutes';


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
          element:<PrivetRoutes><Instructors></Instructors></PrivetRoutes>
        }
      ]
     
    },
    {
      path:'dashboard',
      element:<PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
      children:[
        {
          path:'/dashboard',
          element:<h1 className='text-center text-7xl my-40'>Wellcome To  DashBoard</h1>
        },
        {
          path:'students',
          element:<Students></Students>
        },
        {
          path:'user',
          element:<Users></Users>
        }
      ]
    }

  ]);

export default router;