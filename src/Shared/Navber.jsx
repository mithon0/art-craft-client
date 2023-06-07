import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/image/logo.png"

const Navber = () => {
    return (
        <div className="navbar bg-base-100">
            
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
         <Link to="/">Instructors</Link>
        </li>
        <li>
         <Link to="/">Classes</Link>
        </li>
        <li>
         <Link to="/"> Dashboard</Link>
        </li>
        
      </ul>
    </div>
    <div className='w-32'>
      <img src={logo} alt="" />
    </div>
  </div>
  
  <div className="navbar-end hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
      
      <li >
       
        <Link to="/">Home</Link>
       
      </li>
      <li >
       
        <Link to="/">Instructors</Link>
       
      </li>
      <li >
       
        <Link to="/">Classes</Link>
       
      </li>
      <li >
       
        <Link to="/"> Dashboard</Link>
       
      </li>
      <li className='btn' >
       
        <Link to="/login">Login</Link>
       
      </li>
      
    </ul>
  </div>
</div>
    );
};

export default Navber;