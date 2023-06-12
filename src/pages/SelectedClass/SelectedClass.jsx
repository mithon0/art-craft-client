import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const SelectedClass = () => {
    const [course, addCourse] = useState([]);
    const { user } = useContext(AuthContext)


    useEffect(() => {
        fetch(`https://art-craft-server-side-mithon0.vercel.app/selectclass/${user.email}`)
            .then(res => res.json())
            .then(data => addCourse(data))
    })
    console.log(course);
    return (
        <div>
            <h1 className='text-center text-4xl font-semibold'>Selected Course</h1>
            <p className='text-center '>Added Class: {course.length}</p>
            <button className='btn btn-warning'><Link to="/dashboard/checkout">pay</Link></button>
            {
                course.map(c => <>
                    <div className="card card-side bg-base-100 shadow-xl m-10">
                        <figure><img className='w-56' src={c.image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{c.title}</h2>
                            <p>{c.description}</p>
                           
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default SelectedClass;