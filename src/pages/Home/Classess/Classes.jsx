import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";


const Classes = () => {
    const [classes,setClasses]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/class")
        .then(res=>res.json())
        .then(data=>setClasses(data))

    },[])

    console.log(classes);
    

    return (
        <div>
           <div>
           <div className="divider"></div>
           <h1 className="text-center text-5xl font-light">Top Classes</h1>
           <div className="divider"></div>
            </div> 
            <div>
                {
                    classes.map(c=><ClassCard
                    key={c._id}
                    c={c}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;