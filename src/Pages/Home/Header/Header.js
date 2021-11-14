import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import UseAuth from './../../../Hooks/UseAuth';


const Header = () => {
    const { user, logOut } = UseAuth();
    return (
        <div className="row">
            <div className="col-md-5">
             <div><h2 className="text-danger">BABY WALKER <i class="fas fa-baby-carriage text-info"></i></h2>
             
             </div>
            </div>
            <div className="col-md-7 menu-bar ">
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/addproducts">Add Products</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/login">Login</Link>
            {user?.email &&
                <Link to="/dashboard">Dashboard</Link>
            }
            {
                user?.email &&
                <button className="bg-black text-white" onClick={logOut}>Logout</button>
            }
            </div>
        </div>
    );
};

export default Header;<h2>This is header</h2>