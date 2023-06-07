import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './Routes/router.jsx';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
 <HelmetProvider>
   <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
 </HelmetProvider>
  ,
)
