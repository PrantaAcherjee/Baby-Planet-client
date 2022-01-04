import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="row py-7 my-5 banner d-flex justify-content-center align-items-center">
            <div className="col-md-5">
                <h1 className="text-uppercase text-warning">GIVE YOUR BABY MORE COMFORT</h1>
                <h3 className="text-uppercase color">HAVE A RELAX</h3>
                <p className="fs-5 text-lowercase ">We will provide you the best walker which will provide to your baby more comfort.
                </p>
                <Link to="/explore">
                <button className="bg-warning text-white ">Explore More</button>
                </Link>
            </div>
            <div className="col-md-7">

            </div>
        </div>
    );
};

export default Banner;