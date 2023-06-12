import { useContext, useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Classes = () => {
    const [classes, setClasses] = useState([]);
    const { user } = useContext(AuthContext)
        
    useEffect(() => {
        fetch("http://localhost:5000/class")
            .then(res => res.json())
            .then(data => setClasses(data))

    }, [])

    console.log(classes);
    const addClassHandler = (c) => {
       
        const {title,duration,instructor,description,image,_id}=c;

            console.log(c);
        if (user?.email) {
            const selectedClass ={classId:_id,title,duration,instructor,description,image,email:user.email};
        console.log(selectedClass);
            fetch('http://localhost:5000/selectclass',{
                method:"POST",
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
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
    }

    return (
        <div>
            <div>
                <div className="divider"></div>
                <h1 className="text-center text-5xl font-light">Top Classes</h1>
                <div className="divider"></div>
            </div>
            <div>
                {
                    classes.map(c => <ClassCard
                        key={c._id}
                        c={c}
                        addClassHandler={addClassHandler}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;