import { useState } from "react";
import { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const UserDelete = () => {

    const notify = () => toast.error(`🦄Khattam tata goodbye Gaya ${user.username}` , {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",

});

    const navigate = useNavigate();

    const {id} = useParams();
     const {username}=useParams();


    


     const Delete = () =>{
        const navigate = useNavigate();
     }
    
    const [user, setUser] = useState({
        username:"",
        email:"",
        age:"",
        city:"",
    
    });

 useEffect(()=>{
    axios
    .get(`http://localhost:4000/users/${id}`)
    .then((res) => {
      console.log(res.data);
      setUser(res.data);
    })
    .catch((err) => {  // Corrected the opening bracket for catch
      alert("API Server Error");
      console.log(err);
    });
}, []);


//     const newUser = data.find((obj)=>obj.id.toString()===id.toString())
//     setUser(newUser);
// }, []);

    const deleteUser = () => {
        const confirm = window.confirm("Are you really sure you wanna delete this user?");
        
        if(confirm){
            notify();
            axios.delete(`http://localhost:4000/users/${id}`)
            .then((res) => {
                navigate('/Pages/UserManagement');
            })
            .catch((err) => {  // Corrected the opening bracket for catch
                console.log(err);
            });
        }
    }
    return(
        <div>
        <h2>This is Fast UserDelete yeah </h2>
        <h3>Are you definitely sure you wanna delete this user:{id}?????</h3>

        {/* <h1>User UserDeletes {id} {username}</h1> */}
        <h2>Are you damn sure, You wanna delete?</h2>
            <div>Username: {user.username}</div>
            <div>Age: {user.age}</div>
            <div>City: {user.city}</div>
            <div>Email: {user.email}</div>
            <div>
                <button type="button" className="btnyes" onClick={deleteUser}>Yes</button> 
                <button type="button" className="btnno" onClick={()=>{navigate('/Pages/UserManagement');
                }}>No</button> 
        </div>



        </div>

    );
}
export default UserDelete;