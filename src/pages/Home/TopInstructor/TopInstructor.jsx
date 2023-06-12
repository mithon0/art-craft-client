import React, { useEffect, useState } from 'react';
import InstractorCard from './InstractorCard';

const TopInstructor = () => {
    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
        fetch('https://art-craft-server-side-mithon0.vercel.app/instructor')
            .then(res => res.json())
            .then(data => setInstructor(data))
    })

    return (
        <div>
            <div>
                <div className="divider"></div>
                <h1 className="text-center text-5xl font-light">Top Instructor</h1>
                <div className="divider"></div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 m-10'>
                {
                    instructor.map(i=><InstractorCard
                    key={i._id}
                    i={i}
                    ></InstractorCard>)
                }
            </div>
        </div>
    );
};

export default TopInstructor;