import { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";
import { v4 as uuidv4 } from 'uuid';


const Detail= () => {
    const {id}=useParams();
     const {username}=useParams();


    //  const data = [
    //      {
    //         id:1,
    //     username: "Bishesh",
    //     email: "specialman2099@gmail.com",
    //     age: 22,
    //     city:'Gotham'
    // },
    // {
    //     id: 2,
    //     username: "jay",
    //     email: "jay@gmail.com",
    //     age: 20,
    //     city:'Gotham'
    // },
    // {
    //     id: 3,

    //     username: "joey",
    //     email: "joey@gmail.com",
    //     age: 21,
    //     city:'Gotham'
    // },
    //  {
    //     id: 4,

    //     username: "Ben",
    //     email: "Ben.reilly@gmail.com",
    //     age: 21,
    //     city:'New York'
    // },
    // {
    //     id: 5,

    //     username: "Jessica",
    //     email: "Jessica.reilly@gmail.com",
    //     age: 21,
    //     city:'New York'
    // },
    //  ]

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


    return(
        <div>
        <h2>This is Fast Detail yeah </h2>
        <h3>The detail page no.:{id}</h3>

         {/* <h1>User Details {id} {username}</h1> */}
            <div>Username: {user.username}</div>
            <div>Age: {user.age}</div>
            <div>City: {user.city}</div>
            <div>Email: {user.email}</div>


        </div>

    );
};

export default Detail;