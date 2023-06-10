import React, { useContext, useEffect, useState } from 'react';

import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';



const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    
    const navigate =useNavigate();
    const { signinGoogle, signInGit, signupWithemailPass,profileUpdate } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
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
    

    const onSubmit = data => {
        const name=data.name;
        const photo =data.photoURL

       
           
       
            signupWithemailPass(data.email, data.password)
            .then(result => {
                console.log(result.user);
                profileUpdate(name,photo)
                .then(()=>{
                    
                    Swal.fire(
                        'Success!',
                        'Your ragistration successfully',
                        'success'
                      )
                      navigate('/')
                })
                
            })
            .catch(err => {
                console.log(err.message);
                
            })

            if(data.password !== data.confirmPass){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Your pass are not matching yet!',
            })  


            }

       
    }
    const showPasshandler = () => {
        if (showPass === false) {
            setShowPass(true)
        }
        else {
            setShowPass(false)
        }
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

    return (
        <div>

            <div className='grid md:grid-cols-3 grid-cols-1'>

                <div className='h-full rounded-xl bg-slate-600 content-start '>
                    <h1 className='text-center text-white text-6xl md:mt-40'>Already have an account?</h1>
                    <p className='text-center text-white text-lg mt-10'>
                        login and discover a great <br /> amount of new opportunities
                    </p>
                    <div className='flex justify-center mt-5'>
                        <button className='btn btn-outline text-white w-1/3'><Link to='/login' >login</Link></button>
                    </div>
                </div>
                <div className='col-span-2 md:mb-20 '>
                    <h1 className='text-4xl font-bold text-center'>Please Sign Up</h1>


                    <form onSubmit={handleSubmit(onSubmit)} className=' mx-5 '>
                        <div className='md:mx-40 mt-8'>
                            <label className='p-2 text-lg text-slate-500' htmlFor="name">Your Name</label><br />
                            <input {...register("name")} className='w-full p-2 bg-slate-800  text-white rounded-xl' type="text" placeholder='Your name' />
                        </div>
                        <div className='md:mx-40 mt-8'>
                            <label className='p-2 text-lg text-slate-500' htmlFor="photo">PhotoURL</label><br />
                            <input {...register("photoURL")} className='w-full p-2 bg-slate-800 text-white rounded-xl' type="text" placeholder='PhotoURL' />
                        </div>
                        <div className='md:mx-40 mt-8'>
                            <label className='p-2 text-lg text-slate-500' htmlFor="email">Email</label><br />
                            <input  {...register("email", { required: true })} className='w-full p-2 bg-slate-800 text-white rounded-xl' type="email" placeholder='Enter Your Email' />
                            {errors.email && <span className='text-red-700'>email is required</span>}
                        </div>
                        <div className='md:mx-40 mt-5'>
                            <label className='px-2 text-lg text-slate-500' htmlFor="passWord">Password</label><br />
                            <input  {...register("password", {
                                minLength: 6,
                                required: true,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })} className='w-full p-2  bg-slate-800 text-white rounded-xl' type={showPass ? "text" : "password"} placeholder='Enter PassWord' />

                            {errors.password?.type === 'required' && <span className='text-red-700'>password is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-700'>Minimum 6 cherecter</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-700'>A capital latter and a spacial cherecter</span>} <br />
                            <input  {...register("comfirmPass", { required: true })} className=' mt-4 w-full p-2 bg-slate-800 text-white rounded-xl' type={showPass ? "text" : "password"} placeholder='Confirm Password' /> 
                            {errors.confirmPass && <span className='text-red-700'>confirm your pass</span>}<br />
                            <input onClick={showPasshandler} type="checkbox" className="ms-2 mr-2 my-3" />
                            <label htmlFor="" className='text-sm text-slate-600'>Show Password</label>
                            <div className='mx-auto flex justify-center'>
                                <input className='btn btn-outline mb-10 mt-7 w-full p-2' type="submit" value="SignUp" />
                            </div>
                        </div>

                    </form>
                    <div className="divider md:mx-40">OR</div>
                    <p className='text-center mt-2'><small >sign in With Social Network</small></p>
                    <div className='flex justify-center gap-6 mt-4 '>
                        <button onClick={googleHandler} className='btn btn-primary text-white rounded-full p-1'><FaGoogle className='text-4xl ' /></button>
                        <button onClick={githandler} className='btn btn-neutral  rounded-full p-1'> <FaGithub className='text-4xl ' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;