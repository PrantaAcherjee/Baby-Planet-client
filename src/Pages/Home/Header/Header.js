import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar} from 'react-bootstrap';
import UseAuth from './../../../Hooks/UseAuth';


const Header = () => {
    const { user, logOut } = UseAuth();
    return (
         
        <div className="menu-bar my-5">
        <Navbar  fixed="top" collapseOnSelect expand="lg" bg="light">
        <Container>
        <Navbar.Brand className="text-danger logo"> <h2>BABY WALKER <i class="fas fa-baby-carriage text-info"></i></h2> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
        </Nav>
        <Nav className='headers'>
        <NavLink to="/home">HOME</NavLink>
         
        <NavLink to="/aboutus">ABOUT</NavLink>
        <NavLink to="faq">FAQ</NavLink>
        
        {user?.email &&
        <Link to="/dashboard">DASHBOARD</Link>
        }
        {
         user?.email?
         <NavLink to="" onClick={logOut}>LOGOUT</  NavLink>
        :
        <NavLink to="/login">LOGIN</NavLink> 
         }
        </Nav>
        </Navbar.Collapse>
         </Container>
        </Navbar>
     
        </div>
        
    );
};

export default Header; 