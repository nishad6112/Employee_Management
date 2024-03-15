import React, { useState } from 'react';
import Header from '../dashboard/Header';
import './LoginSignup.css' 
import user from '../Assets/user.png';
import email from '../Assets/email.png';
import password from '../Assets/password.png';

 const Login = () => {
    // State to hold login credentials
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // Function to handle form submission
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Add your login logic here
    //     console.log("Email:", email);
    //     console.log("Password:", password);
    // };

    const[action,setAction]= useState("Sign Up");
  return (
     <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
          <div className='underline'> </div>
        </div>

        <div className='inputs'>
          {action==="Login"?<div></div>: <div className='input'>
            <img src={user} alt=""/>
            <input type="text" placeholder='Name'/>
          </div>}
          
        
        
          <div className='input'>
            <img src={email} alt=""/>
            <input type="email" placeholder='Email'/>
          </div>

        
          <div className='input'>
            <img src={password} alt=""/>
            <input type="password" placeholder='Password'/>
          </div>
     


        </div>
        {action==="Sign Up"?<div></div>: <div className='forgot-password'>Forget Password ? <span>Click here !!</span></div>}
         <div className='submit-container'>
          <div className={action==="Login"? "submit gray":"submit"} onClick={()=> {setAction("Sign Up")}}> Sign Up</div>
          <div className={action==="Sign Up"? "submit gray":"submit"} onClick={()=> {setAction("Login")}}>Login</div>
        </div>
      </div>
     

    );
};

export default Login;
