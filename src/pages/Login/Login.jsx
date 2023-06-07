import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Helmet
          title='MonArt | Login'
          ></Helmet> 
          <div className='grid md:grid-cols-3 grid-cols-1'>
            <div className='col-span-2 md:mb-20 '>
               <h1 className='text-4xl font-bold text-center'>LogIn To Your Account</h1> 
               <p className='text-center mt-2'><small >Login With Social Network</small></p>
               <div className='flex justify-center gap-6 mt-4 '>
                <button className='btn btn-primary text-white rounded-full p-1'><FaGoogle className='text-4xl '/></button>
               <button className='btn btn-neutral  rounded-full p-1'> <FaGithub className='text-4xl '/></button>
               </div>
               <div className="divider md:mx-40">OR</div>
               <form className='border mx-5 '>
                <div className='md:mx-40 mt-8'>
                <label className='p-2 text-lg text-slate-500' htmlFor="email">Email</label><br />
                <input className='w-full p-2 bg-slate-800 text-white rounded-xl' type="email" placeholder='Enter Your Email' />
                </div>
               <div className='md:mx-40 mt-5'>
               <label className='px-2 text-lg text-slate-500' htmlFor="passWord">Password</label><br />
                <input className='w-full p-2  bg-slate-800 text-white rounded-xl' type="email" placeholder='Enter PassWord' />
                <input type="checkbox"  className="ms-2 mr-2 my-3" />
               <label htmlFor="" className='text-sm text-slate-600'>Show Password</label>
               <div className='mx-auto flex justify-center'>
               <input className='btn btn-outline mb-10 mt-7 w-full p-2' type="submit" value="Login" />
               </div>
               </div>

               </form>
            </div>
            <div className='h-full rounded-xl bg-slate-600 content-start '>
        <h1 className='text-center text-white text-6xl md:mt-40'>New Here?</h1>
        <p className='text-center text-white text-lg mt-10'>
            sign up and discover a great <br /> amount of new opportunities
        </p>
        <div className='flex justify-center mt-5'>
        <button className='btn btn-outline text-white w-1/3'><Link to='/register' >Sign Up</Link></button>
        </div>
            </div>
          </div>
        </div>
    );
};

export default Login;