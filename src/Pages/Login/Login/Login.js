import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth';
import { Link } from 'react-router-dom';




const Login = () => {
    const {signInUsingGoogle,logInWithEmailPassword} = UseAuth();
    const location=useLocation();
    const redirect_uri=location.state?.from || '/home'
    const history=useHistory();


    const handleGoogleLogin=()=>{
signInUsingGoogle()
.then(result => {
   history.push(redirect_uri) 
})
    }
    return (
        <div className="row">
            <div className="col-md-8">
                <div>
                    <img className="img-fluid" src="https://as2.ftcdn.net/v2/jpg/03/86/51/03/500_F_386510351_03Qk3je4FGnVLo4vXRdOpoDWfZjtmajd.jpg" alt="" />
                    <button className="bg-warning rounded-pill" onClick={handleGoogleLogin}>Google Log in</button>
                </div>
                <p className="fw-bold text-danger">Are You New User?</p>
                <Link to="/register">Please Register</Link>
            </div>
            <div className="col-md-4">
            <form>
                    <input className="my-2" type="email" placeholder="Enter your Email" required />
                    <br />
                    <input type="password" name="password" placeholder="Enter your password" required />
                    <br />
                    <br />
                    <button className="bg-success text-white px-2 rounded-pill " onSubmit={logInWithEmailPassword} type="submit">Log in</button>
                </form>
            </div>

        </div>
    );
};

export default Login;