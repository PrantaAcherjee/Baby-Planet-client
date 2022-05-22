import React from 'react';
import { Link } from 'react-router-dom';
import "./Discount.css";

const Discount = () => {
  return (
    <div className='discount-banner d-flex justify-content-between align-items-center px-4 my-4'>
        <div>
         {/* this is blank  */}
        </div>
       <div className='column-two'>
       <h5 style={{letterSpacing:'0.8rem'}}>NEW BRAND COLLETION</h5>
        <h1 className='text-danger'>BABY FASHION</h1>
        <h4>Flat 50% Off</h4>
        <Link to="/explore">
        <button className="bg-danger text-white btn">Shop Now</button>
        </Link> 
       </div>
    </div>
  )
}

export default Discount