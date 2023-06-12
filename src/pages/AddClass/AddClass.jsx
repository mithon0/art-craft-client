import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddClass = () => {
        const {user}=useContext(AuthContext)

    const addHandler =e=>{
        e.preventDefault();
        const form =e.target
        console.log(form.title.value);

        const title =form.title.value;
        const image =form.image.value;
        const price =form.price.value;
        const seat =form.seat.value;

        const classs ={title,image,price,seat, instructor:user.displayName }
        console.log(classs);

            fetch('http://localhost:5000/class',{
                method:"POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classs)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                } 
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add A Class</h1>
            <p className="py-6">Add a class on database</p>
          </div>
         <form onSubmit={addHandler}>
         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class name</span>
                </label>
                <input name='title' type="text" placeholder="Class name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Image</span>
                </label>
                <input name='image' type="text" placeholder="Class Image Url" className="input input-bordered" />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor name</span>
                </label>
                <input readOnly defaultValue={user.displayName}  type="text" placeholder="Instructor name" className="input input-bordered" />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor email</span>
                </label>
                <input readOnly defaultValue={user.email}  type="text" placeholder="Instructor email" className="input input-bordered" />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input name='price' type="text" placeholder="Price" className="input input-bordered" />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available seats</span>
                </label>
                <input name='seat' type="text" placeholder="Available seats" className="input input-bordered" />
               
              </div>
             
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
         </form>
        </div>
      </div>
    );
};

export default AddClass;