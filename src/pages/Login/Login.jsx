import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <Helmet
          title='MonArt | Login'
          ></Helmet> 
          <div className='grid grid-cols-3'>
            <div className='col-span-2 mb-20 '>
               <h1 className='text-4xl font-bold text-center'>LogIn To Your Account</h1> 
               <p className='text-center mt-2'><small >Login With Social Network</small></p>
               <div className='flex justify-center gap-6 mt-4 '>
                <button className='btn btn-primary text-white rounded-full p-1'><FaGoogle className='text-4xl '/></button>
               <button className='btn btn-neutral  rounded-full p-1'> <FaGithub className='text-4xl '/></button>
               </div>
               <div className="divider mx-40">OR</div>
               <form className='border mx-5 '>
                <div className='mx-40 mt-8'>
                <label className='' htmlFor="email">Email</label><br />
                <input className='w-full p-2 bg-slate-800 text-white rounded-xl' type="email" placeholder='Enter Your Email' />
                </div>
               <div className='mx-40 mt-5'>
               <label htmlFor="passWord">Password</label><br />
                <input className='w-full p-2  bg-slate-800 text-white rounded-xl' type="email" placeholder='Enter PassWord' />
               <div className='mx-auto flex justify-center'>
               <input className='btn btn-outline mb-10 mt-7 w-full p-2' type="submit" value="Login" />
               </div>
               </div>

               </form>
            </div>
            <div>

            </div>
          </div>
        </div>
    );
};

export default Login;