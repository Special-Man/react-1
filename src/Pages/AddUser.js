import { useState } from "react";
import {useNavigate} from "react-router-dom";
import ViTextInput from "../components/ViTextInput";
import ViPassInput from "../components/ViPassInput";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

  // const navigate = useNavigate();
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [age,setAge] = useState('');
  // const [city,setCity] = useState('');
  const AddUser = () => {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isValid,setIsValid] = useState(false);

  const [user, setUser] = useState
    (
      {
      username:"",
      password:"",
      email:"",
      age:"",
      city:"",
    }
  )

  const [errorMsg, setErrMsg] = useState({
    username: "",
    password:"",

    email: "",
    age: "",
    city: "",
  });
  

const validateForm = () =>{
  
  return (
    user.username === '' ? false :
    user.password === '' ? false :
    user.email === '' ? false :
    user.age === '' ? false :
    user.city === '' ? false : true
  );
};

    

   const handleInputChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const saveForm = () => {

    const uuid = uuidv4();

      if(validateForm()){
        const item = {...user, id:uuid}
        console.log('User:', item);
        axios.post('http://localhost:4000/users', item)
        .then(()=>{
          console.log("user saved");
          navigate('/Pages/UserManagement');
        }).catch((err)=>{
          console.log(err);
          alert("SERVER ERROR");
        })
        // navigate('/pages/UserManagement');
    }
  }


  return (
    <div>
      <h2>Add User, Right Now now now:</h2>
      <div>
        <table>
        <tr>

        <td><label>Username</label></td>
        <td>
        <ViTextInput 
        title=""
        name="username"
        value={user.username}
        handleInputChange={handleInputChange}
        isSubmitted = {isSubmitted}
        errMessage={errorMsg.username}/>

          {/* <input 
          type="text"
          onChange={handleInputChange}
          name="username"
          value={user.username} />
          {isSubmitted && user.username === ''&& <span class="label-danger">  Username is required.</span>}
           */}
          </td>
      </tr>


      <tr>
        <td><label>Password</label></td>
        <td> 
        <ViPassInput 
        title=""
        name="password"
        value={user.password}
        handleInputChange={handleInputChange}
        isSubmitted = {isSubmitted}
        errMessage={errorMsg.password}/>

          </td>
      </tr>


     


      <tr>
        <td><label>Email</label></td>
        <td> 
         <ViTextInput  
        title=""
        name="email"
        value={user.email}
        handleInputChange={handleInputChange}
        isSubmitted = {isSubmitted}
        errMessage={errorMsg.email}/>
           </td>
      </tr>

      <tr>
        <td><label>Age</label></td>
        <td>
        <ViTextInput  
        title=""
        name="age"
        value={user.age}
        handleInputChange={handleInputChange}
        isSubmitted = {isSubmitted}
        errMessage={errorMsg.age}/>
           </td>
          
      </tr>

      
      <tr>
       <td><label>City</label></td>
        <td> 
        <ViTextInput 
        title=""
        name="city"
        value={user.city}
        handleInputChange={handleInputChange}
        isSubmitted = {isSubmitted}
        errMessage={errorMsg.city}/>
          </td>
      </tr>

      <tr>
        <td colSpan="2"><button onClick={saveForm}>Save This</button></td></tr>
      </table>
    </div>
    </div>
  );
}

export default AddUser;