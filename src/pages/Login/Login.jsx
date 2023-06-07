import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


const Login = () => {
    const [showPass,setShowPass]=useState(false);
    const {signinGoogle,signInGit,login}=useContext(AuthContext);
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const googlrProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const googleHandler = () => {
        signinGoogle(googlrProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const githandler = () => {
        signInGit(gitProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    // login with email pass

    const onSubmit = data => { 
        console.log(data);
        login(data.email,data.password)
        .then(result=>{
            console.log(result.user);
            Swal.fire(
                'Success!',
                'Your ragistration successfully',
                'success'
              )
        })
        .catch(err=>{
            console.log(err.message);
        })
    }



    const passhandler=()=>{
        if(showPass===false){
            setShowPass(true);
        }
        else{
            setShowPass(false)
        }
    }
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
                <button onClick={googleHandler} className='btn btn-primary text-white rounded-full p-1'><FaGoogle className='text-4xl '/></button>
               <button onClick={githandler} className='btn btn-neutral  rounded-full p-1'> <FaGithub className='text-4xl '/></button>
               </div>
               <div className="divider md:mx-40">OR</div>
               <form onSubmit={handleSubmit(onSubmit)} className='border mx-5 '>
                <div className='md:mx-40 mt-8'>
                <label className='p-2 text-lg text-slate-500' htmlFor="email">Email</label><br />
                <input {...register("email")} className='w-full p-2 bg-slate-800 text-white rounded-xl' type="email" placeholder='Enter Your Email' />
                </div>
               <div className='md:mx-40 mt-5'>
               <label className='px-2 text-lg text-slate-500' htmlFor="passWord">Password</label><br />
                <input {...register("password")} className='w-full p-2  bg-slate-800 text-white rounded-xl' type={showPass?"text":"password" }placeholder='Enter PassWord' />
                <input onClick={passhandler} type="checkbox"  className="ms-2 mr-2 my-3" />
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