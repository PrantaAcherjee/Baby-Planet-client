import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';


const Register = () => {
    const { registerWithEmailPassword, handleEmailChange, handlePasswordChange,saveUser} = UseAuth();
    const location= useLocation();
    const history=useHistory();
    const destination=location?.state?.from || "/home";
    const handleRegister=(e)=>{    
    registerWithEmailPassword()
    .then(result => {
        const user = result.user;
        saveUser(user.email)
        console.log(user);
    })
    history.replace(destination);
    e.preventDefault();
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
                        <button className="bg-success rounded-pill text-white px-2" type="submit">Register</button>
                    </form>
                    <br />
                    <br />
                    <p className="fw-bold text-danger">Alredy Registered?</p>
                    <Link to="/login">Please Log In</Link>
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