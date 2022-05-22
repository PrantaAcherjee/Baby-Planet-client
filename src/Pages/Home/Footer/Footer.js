import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitterSquare,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';

import "./Footer.css"
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
<div className=" footer-all">
    <div className="row">
                <div className="col-md-3 col-sm-12">
                <div className="row d-flex justify-content-around">
    <div className="">
        <div>               
                <div>
                <div className='logo'> Baby <span className='span'>Planet</span></div>
                <div className="d-flex align-items-center justify-content-around">
                 <div><h6>ADRESS :</h6></div>
                <div><small>205 Olazu Familia, <br /> Herba Street Front USA</small></div>
                    </div>
             <div className="d-flex justify-content-around align-items-center">
                <div><h6>EMAIL :</h6></div>
             <div><small>support@tadathemes.com</small></div>
             </div>
                <div className=" d-flex    align-items-center justify-content-around">
             <div><h6>PHONE US :</h6></div>
                 <div><small>002- 01008431112</small></div>
            </div>
            <div className=" d-flex    align-items-center justify-content-around">
                    <div><h6>Follow us on social :</h6></div>
                 <div className="text-info"><FontAwesomeIcon icon={faFacebookF} /></div>
                 <div className="text-info"><FontAwesomeIcon icon={faTwitterSquare} /></div>
                 <div><FontAwesomeIcon icon={faGithub} /></div>
                 <div className="text-info"><FontAwesomeIcon icon={faLinkedin} /></div>
            </div>
                </div>
    </div>
    </div>
        
        
    </div>
                </div>
                <div className="col-md-3">
                <div className="">
        <h4 className="text-info">OUR CATEGORIES</h4>
        Clothing Sets <br />
        Baby Girl Sets <br />
        Baby Boys Sets <br />
         Order Status <br />
        Free Shipping
        & Exchange <br />
        Testimonials

        </div>
                </div>
                <div className="col-md-3">
                <div className="">
        <div>
        <h4 className="text-info">CUSTOMER SUPPORT</h4>
        <NavLink style={{textDecoration:'none',color:'white'}} to="/aboutus">ABOUT</NavLink> <br/>
        <NavLink style={{textDecoration:'none',color:'white'}} to="faq">FAQ</NavLink> <br/>
        Help and Ordering <br />
        Privacy Policy <br />
        Return & Cancellation <br />
        Delevery Schedule <br />
        Today's Deals <br />
        Get a Call <br />
         
        </div>

        </div>
       
                </div>
                <div className="col-md-3">
                    <div>
                    <h4 className="text-info">NEWSLETTER</h4>
                <p><small>
                    Enter your email and we’ll send you latest information plans.
                </small></p>
             
                      
                     <input type="email" placeholder="Enter your Email" />
                    <br />
                    <button className="bg-info p-2 m-2 text-white rounded-pill">SUBSCRIBE US</button>
                    </div>
             </div>
    </div>
            
    
    <p className='pt-4 text-warning'>&copy; COPYRIGHT 2022 || ALL RIGHT RESERVED Baby Planet.</p>
</div>
    );
};

export default Footer;