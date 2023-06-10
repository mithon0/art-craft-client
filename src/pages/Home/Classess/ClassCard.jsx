import React from 'react';

const ClassCard = ({c}) => {
    const {image,title,description,duration,instructor,level}=c;
    return (
        <div>
             <div className="card card-side bg-base-100 shadow-xl m-10">
  <figure><img className='w-44' src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p>Course Duration: {duration}</p>
    <p>Instructor: {instructor}</p>
    <p>Level: {level}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Enrol Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ClassCard;