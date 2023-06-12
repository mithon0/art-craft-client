import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';




const Dashboard = () => {
    // todo
    const [isAdmin,setIsAdmin]=useState(true);
    const {user}=useContext(AuthContext)

useEffect(()=>{
    fetch(`http://localhost:5000/users/admin/${user.email}`)
    .then(res=>res.json())
    .then(data=>setIsAdmin(data.admin))
})
     
    // const isAdmin =true
//    useEffect(()=>{
//     if(users.role === 'admin'){
//         setIsAdmin(true)
//     }else{
//         setIsAdmin(false)
//     }
//    },[isAdmin])
    
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-3 m-10'>
                <Outlet></Outlet>
            </div>
            <div className='bg-slate-300'>
                <ul className="menu p-4 w-80">
                   {

                    isAdmin? <>
                     <li>
                        <Link to="/dashboard">Admin Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/students">students</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/user'>Manage Users</Link>
                    </li>
                    
                    </>:<>
                    
                    <li>
                        <Link to="/dashboard">Student Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/selectedclass">Selected Class</Link>
                    </li>
                    <li>
                        <Link >Enroled class</Link>
                    </li>
                    
                    </>

                   }
                        <div className="divider"></div>
                        <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;