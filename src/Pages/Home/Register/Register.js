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
        <div className="row">
            <div className="col-md-8">
                <br /><br /><br />
                <div>
                    <h2 className="text-primary">Please Register</h2>
                    <form onSubmit={handleRegister}>
                        <input className="my-2" onChange={handleEmailChange} type="email" placeholder="Enter your Email" required />
                        <br />
                        <input onChange={handlePasswordChange} type="password" name="password" placeholder="Enter your password" required />
                        <br />
                        <br />
                        <button className="bg-success rounded-pill text-white px-2" type="submit">SIGN UP</button>
                        
                    </form>
                    
                    <br />
                    <br />
                    <p className="fw-bold text-danger">Alredy Registered?</p>
                    <Link style={{textDecoration:'none',fontWeight:'bold'}} to="/login">Please Login</Link>
                </div>
            </div>
            <div className="col-md-4">

                <div>
                    <img className="img-fluid" src=" https://image.freepik.com/free-vector/registration-form-template-with-flat-design_23-2147976702.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Register;