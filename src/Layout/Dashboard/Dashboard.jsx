import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    // todo
    const isAdmin =true;
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
                        <Link to="dashboard/home">Admin Home</Link>
                    </li>
                    <li>
                        <Link>students</Link>
                    </li>
                    <li>
                        <Link to='dashboard/user'>Manage Users</Link>
                    </li>
                    
                    </>:<>
                    
                    <li>
                        <Link to="dashboard/home">Student Home</Link>
                    </li>
                    <li>
                        <Link>Selected Class</Link>
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