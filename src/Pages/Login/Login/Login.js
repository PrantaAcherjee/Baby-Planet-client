import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth';
import { Link } from 'react-router-dom';

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
        <div className="row">
            <div className="col-md-8">
                <div>
                    <img className="img-fluid" src="https://as2.ftcdn.net/v2/jpg/03/86/51/03/500_F_386510351_03Qk3je4FGnVLo4vXRdOpoDWfZjtmajd.jpg" alt="" />
                    
                </div>
                
            </div>
            <div className="col-md-4">
                <br /><br /> <br /> <br />
            <button className="bg-warning rounded-pill" onClick={handleGoogleLogin}>SIGN IN WITH GOOGLE</button>
            <br /> 
             <br /> 
            <form onSubmit={handleEmailPasswordLogin} >
                    <input className="my-2" type="email" placeholder="Enter your Email"
                    onChange={handleEmailChange}
                    required />
                    <br />
                    <input type="password" name="password" placeholder="Enter your password"
                    onChange={handlePasswordChange}
                    required />
                    <br />
                    <br />
                    <button className="bg-success text-white px-2 rounded-pill " type="submit">SIGN IN</button>
                    {error &&
                    <p>Wrong info you are given !</p>           
                    }
            </form>
                <br />
                <h5 className="fw-bold text-danger">Are You New User?</h5>
                <Link to="/register">Please Register</Link>
            </div>

        </div>
    );
};

export default Login;