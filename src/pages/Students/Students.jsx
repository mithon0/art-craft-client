import React, { useEffect, useState } from 'react';

const Students = () => {
    const isAdmin = true;
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://art-craft-server-side-mithon0.vercel.app/users')
            .then(res => res.json())
            .then(data => setUser(data))
    })
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        user.map((u,index)=><> <tr className="bg-base-200">
        <th>{index}</th>
        <td>{u.name}</td>
        <td>{u.email}</td>
        <td>{u.role}</td>
      </tr></>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Students;