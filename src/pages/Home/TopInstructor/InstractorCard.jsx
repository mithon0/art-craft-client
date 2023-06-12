import React from 'react';
import { Link } from 'react-router-dom';

const InstractorCard = ({i}) => {
    console.log(i);
    const {name,classs,experience,picture}=i
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-5">
  <figure className="px-10 pt-10">
    <img src={picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Course: {classs}</p>
    <p>Experience: {experience}</p>
    <div className="card-actions">
      <button className="btn btn-primary"><Link to='/instructor'>Go to Instructor page</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default InstractorCard;