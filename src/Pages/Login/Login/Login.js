import React, { useState } from 'react';
import "./Login.css";
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signInUsingGoogle,logInWithEmailPassword,  error} = UseAuth();
    const location=useLocation();
    const history=useHistory();

    const handleEmailChange = e => {
        setEmail(e.target.value);
        //console.log(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
        //console.log(e.target.value)

    }

const handleGoogleLogin=()=>{
signInUsingGoogle(location,history)

}

const handleEmailPasswordLogin=(e)=>{
    logInWithEmailPassword(email,password,location,history)  
    e.preventDefault(); 
}

    return (
        <div className="container">
         
            <form onSubmit={handleEmailPasswordLogin} className="auth-section">
            <h3 className="text-secondary">Sign in account</h3>
                    <input className="my-2" type="email" placeholder="Enter your Email"
                    onChange={handleEmailChange}
                    required />
                    <br />
                    <input type="password" name="password" placeholder="Enter your password"
                    onChange={handlePasswordChange}
                    required />
                    <br />
                    <br />
                    <button type="submit" className='signInBtn'>SIGN IN</button>
                    {error &&
                    <Alert className='danger'>
                    You are given wrong info  
                    </Alert>          
                    }
                 </form>
                 <button className='signInBtn mt-2'  onClick={handleGoogleLogin}><i class="fab fa-google"></i> SIGNIN WITH GOOGLE</button>
                <br />
                <p className="fw-bold">Are you new user?<Link style={{textDecoration:'none',fontWeight:'bold'}} to="/register"> Please Register</Link></p>
                
            </div>

        
    );
};

export default Login;