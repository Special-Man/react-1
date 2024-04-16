import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViPassInput from "../components/ViPassInput";
import ViTextInput from "../components/ViTextInput";
import ViMessage from "../components/ViMessage";


const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //let errorMsg = document.getElementById("error")
  
    const handleInputChange = (event) => {
      if(event.target.name === 'email') {
        setEmail(event.target.value);
      }
      if(event.target.name === 'password') {
        setPassword(event.target.value);
      }
    }
    const doLogin = (e) => {
      let isLogin = false;
      if(email === "admin" && password === "admin") {
        isLogin = true;
      }
  
      if(isLogin) {
        localStorage.setItem('isLogin','1');
        navigate('/Pages/UserManagement');
      } else {
setErrorMessage("This username or password is incorrect. YOU SHALL NOT PASS!");

      }
    }
useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if(isLogin === '1'){
        navigate('/Pages/UserManagement');
        console.log("Login component Mounted");
    }
},[])
    return(
        <div>
            <div class="box">
            <h1>Login</h1>

            <form method="post" action="index.html">

<h1>Dashboard</h1>
{errorMessage && <ViMessage message = {errorMessage}/>}

<ViTextInput 
        title="Email" 
        name="email" 
        placeholder="Username"
        class="email"
        handleInputChange={handleInputChange}
        value={email} />


<ViPassInput 
        title="Password" 
        name="password" 
        placeholder="Password"

        handleInputChange={handleInputChange}
        class="email"
        value={password} />
{/* <Link to="/pages/UserManagement"> */}
<div class="btn-l" onClick={doLogin}>Sign In</div>
            {/* </Link> */}

  

</form>
</div>
        </div>
    )
}

export default Login;