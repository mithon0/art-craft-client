import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Instructors = () => {
    const [instructor,setInstructor]=useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/users/instructor')
        .then(res=>res.json())
        .then(data=>setInstructor(data))
    },[])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>image</th>
        <th>name</th>
        <th>email</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
     {
        instructor.map(i=><>
        <tr>
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img className='w-40' src={i.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
         {i.name}
          <br/>
          
        </td>
        <td>{i.email}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        </>)
     }
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Instructors;