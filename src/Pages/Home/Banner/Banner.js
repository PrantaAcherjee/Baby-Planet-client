import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="d-flex justify-content-center align-items-center banner my-3">
            <div className='banner-info'>
            <h4 className='lovely'>Lovely Kids</h4>
                <h2>Safe Toys For Kids</h2>
                <p>With the most safe products for your baby like mother care.<br/> Get the original product here.</p>
                <Link to="/explore">
                <button className="bg-info text-white btn">View Collection</button>
                </Link>   
            </div> 
        </div>
    );
};

export default Banner;