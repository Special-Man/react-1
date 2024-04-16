import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ViTable from "../components/ViTable";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const UserManagement= () => {

  
  const uuid = uuidv4();
  console.log(uuid);


    const header = [
        {
          key: "username",
          name: "Username",
        },
        {
          key: "email",
          name: "Email",
        },
        {
          key: "age",
          name: "Age",
        },
        {
          key: "city",
          name: "City",
        }
      ]
    const data =[
        {
            id:1,
        username: "Bishesh",
        email: "specialman2099@gmail.com",
        age: 22,
        city:'Gotham'
    },
    {
        id: 2,
        username: "jay",
        email: "jay@gmail.com",
        age: 20,
        city:'Gotham'
    },
    {
        id: 3,

        username: "joey",
        email: "joey@gmail.com",
        age: 21,
        city:'Gotham'
    },
     {
        id: 4,

        username: "Ben",
        email: "Ben.reilly@gmail.com",
        age: 21,
        city:'New York'
    },
    {
        id: 5,

        username: "Jessica",
        email: "Jessica.reilly@gmail.com",
        age: 21,
        city:'New York'
    },
    ]

const [users, setUsers] = useState([]);

useEffect( ()=> {
    axios
        .get("http://localhost:4000/users")
        .then((res) => {
          console.log(res.data);
          setUsers(res.data);
        })
        .catch((err) => {  // Corrected the opening bracket for catchy
          alert("API Server Error");
          console.log(err);
        });
    }, []);



    return(
        <div>
        <h2>This is User Massnagement!!!!!</h2>
        <h3>This page is dynamic, and each pages of others are different.</h3>
        
        <Link className="adser" to="/Pages/AddUser">Add User here.</Link>
       
        
        <ViTable 
        users={users}
        header={header}
        actions={[
            {
              name: "Detail",
              link: "/user-management/detail",
              className: "btn btn-default"
            },
            {
              name: "Edit",
              link: "/UserManagement/EditUser",
              className: "btn"
            },
            {
              name: "Delete",
              link: "/UserManagement/UserDelete",
              className: "btn btn-danger"
            }
          ]}
      />

      

        {/* <table>
        <tr>
            <th>User</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
            <th>ACtion</th>

            </tr>
                 {users.length>0 &&
                   
                users.map((user,index) =>{
                    return(
                        <tr  key={index}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.city}</td>

                        <td> 
                        <Link className="detailyo" to={`/Pages/detail/${user.id}`}>Detailus</Link>
                        <Link className="blue" to={`/Pages/AddUsers/edit/${user.id}`}>Editus  </Link>
                         <Link className="red" to={`/Pages/AddUsers/delete/${user.id}`}>Deletus </Link></td>
                        
                        </tr>
                )
                })
            }

        
        
        { users.length === 0 &&
<tr>
    <td colSpan={4}>No Records Found till now. So Please wait for few Seconds and then the data will be displayed.</td></tr>
}
        
        </table> */}
     
        </div>

    );
};


export default UserManagement;