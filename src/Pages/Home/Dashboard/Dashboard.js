 import React from 'react';
 import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';

 const DashBoard = () => {
     const {user,logOut}=UseAuth();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
     return (
         <div>
             <div>
             <Button variant="primary" onClick={handleShow}>
                    BABY WALKER
            </Button>
             </div>
             <div>
                <Offcanvas show={show} onHide={handleClose}>
                 <Offcanvas.Header closeButton>
                 <Offcanvas.Title>Welcome to BABY WALKER</Offcanvas.Title>
                </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Link to="/payment">
                    <Button>Payment</Button>
                    </Link>
                    <br />
                    <br />
                    <Link to="/myorder">
                    <Button>My Orders</Button>
                    </Link>
                    <br />
                    <br />
                    <Link to="/reviews">
                    <Button>Reviews</Button>
                    </Link>
                    <br />
                    <br />
                   {
                       user?.email &&
                        
                       <Button onClick={logOut}>Logout</Button>
                       
                   }
                </Offcanvas.Body>
               
                     </Offcanvas>
             </div>
         </div>
     );
 };
 
 export default DashBoard;