import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Users = () => {
    const [users,setUsers]=useState([]);
    const [disable,setDisable]=useState(false)

    const handleDlete=(id)=>{

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/user/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        })

         
        }
      })



        
    }
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    })
  const makeAdminHandler=(id)=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Make Admin!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${id}`,{
        method:"PATCH"
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setDisable(true);
      Swal.fire(
        'Admin!',
        'The User is now admin',
        'success'
      )
    })
      }
    })

    
    
  }
    return (
        <div className="overflow-x-auto">
            <h1 className='text-center text-5xl font-bold'>Manage Users</h1>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>photo</th>
        <th>name</th>
        <th>email</th>
        <th>role</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user=><>
        <tr>
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td> 
        <td>
         <h1>{user.name}</h1>
        </td>
        <td>{user.email}</td>
        <th>
          {
            user.role === 'admin'?'admin':<button onClick={()=>makeAdminHandler(user._id)} className="btn btn-secondary btn-xs">Make Admin</button>
          }
          <br />
          
          <button disabled={disable} className="btn btn-primary btn-xs">Make Instructor</button>
        </th>
        <th>
          <button  disabled={disable} onClick={()=>handleDlete(user._id)} className="btn btn-error btn-xs">Delete</button>
        </th>
      </tr>
    
        </>)
      }
    </tbody>
   
    
    
  </table>
</div>

    )};

export default Users;