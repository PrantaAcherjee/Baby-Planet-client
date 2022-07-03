import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {registerWithEmailPassword} = UseAuth();
    const location= useLocation();
    const history=useHistory();
   

    const handleEmailChange = e => {
        setEmail(e.target.value);
        //console.log(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
        //console.log(e.target.value)

    }

    const handleRegister=(e)=>{    
    registerWithEmailPassword(email,password,location,history)
    e.preventDefault()  
    }
    return (
        <div className="container">
             
                    <form onSubmit={handleRegister} className="auth-section">
                    <h3 className="text-secondary">Create an account</h3>
                        <input className="my-2" onChange={handleEmailChange} type="email" placeholder="Enter your Email" required />
                        <br />
                        <input onChange={handlePasswordChange} type="password" name="password" placeholder="Enter your password" required />
                        <br />
                        <br />
                        <button className="signInBtn" type="submit">SIGN UP</button>
                        
                    </form>                    
                    <p className="fw-bold mt-4">Alredy registered? <Link style={{textDecoration:'none',fontWeight:'bold'}} to="/login">Please Login</Link></p>
                 
            
        </div>
    );
};

export default Register;