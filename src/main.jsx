import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './Routes/router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider';
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


ReactDOM.createRoot(document.getElementById('root')).render(
 
  <HelmetProvider>
   <React.StrictMode>
  <AuthProvider>
  
  <RouterProvider router={router}></RouterProvider>
 
  </AuthProvider>
  </React.StrictMode>
 </HelmetProvider>
 
  ,
)
