import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar} from 'react-bootstrap';
import UseAuth from './../../../Hooks/UseAuth';


const Header = () => {
    const { user, logOut } = UseAuth();
    return (
         
        <div className="menu-bar">
        <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
        <Navbar.Brand><h2 className="text-danger">BABY WALKER <i class="fas fa-baby-carriage text-info"></i></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
        </Nav>
        <Nav className='headers'>
        <NavLink to="/home">Home</NavLink>
         
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="faq">FAQ</NavLink>
        
        {user?.email &&
        <Link to="/dashboard">Dashboard</Link>
        }
        {
         user?.email?
         <NavLink to="" onClick={logOut}>Log Out</  NavLink>
        :
        <NavLink to="/login">Login</NavLink> 
         }
        </Nav>
        </Navbar.Collapse>
         </Container>
        </Navbar>
     
        </div>
        
    );
};

export default Header; 