import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyClass = () => {
    const {user}=useContext(AuthContext);
    const [myclass,setMyclass]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/myclass/${user.email}`)
        .then(res=>res.json())
        .then(data=>setMyclass(data))
    })
    return (
        <div className='grid grid-cols-2'>
            {
                myclass.map(m=><><div className="card card-compact m-10 w-96 bg-base-100 shadow-xl">
                <figure><img className='w-56' src={m.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{m.title}</h2>
                  <p>Price: {m.Price}</p>
                  <p>Avilable seat: {m.seat}</p>
                  <p>Instructor: {m.instructor}</p>
                
                </div>
              </div></>)
            }
        </div>
    );
};

export default MyClass;