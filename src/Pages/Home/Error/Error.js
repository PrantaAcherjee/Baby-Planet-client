import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div className='pt-5 bg-img'>
            <div className='d-flex align-items-center justify-content-center text-white'>
           <div>
           <h2>404</h2>
            <h4>page could not found !</h4>
            <br />
            <Link to="/"><Button className='bg-success'> GO BACK TO HOME</Button> </Link>
           </div>
            </div>
        </div>
    );
};

export default Error;