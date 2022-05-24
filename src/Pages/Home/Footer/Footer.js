import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitterSquare,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';

import "./Footer.css"
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
<div style={{overflow:'hidden'}} className=" footer-all">
    <div className="row">
                <div className="col-md-3 col-sm-12">
                <div className="row d-flex justify-content-around">
    <div className="">
        <div>               
                <div className='px-4'>
                <div className='logo'> Baby <span className='span'>Planet</span></div>
                <div className="d-flex align-items-center justify-content-between">
                <div>ADRESS :</div>
                <div><small>205 Olazu Familia, <br /> Herba Street Front USA</small></div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <div>EMAIL:</div>
                <div>support@tadathemes.com </div>             
                </div>
                <div className=" d-flex    align-items-center justify-content-between">
             <div>PHONE US :</div>
                 <div>002- 01008431112</div>
            </div>
            <div className=" d-flex align-items-center justify-content-between">
                    <div>Follow us on social :</div>
                 <div className="text-white"><FontAwesomeIcon icon={faFacebookF} /></div>
                 <div className="text-white"><FontAwesomeIcon icon={faTwitterSquare} /></div>
                 <div><FontAwesomeIcon icon={faGithub} /></div>
                 <div className="text-white"><FontAwesomeIcon icon={faLinkedin} /></div>
            </div>
                </div>
    </div>
    </div>
        
        
    </div>
                </div>
            <div className="col-md-3">
            <div>
           <h4 className="text-secondary">OUR CATEGORIES</h4>
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
        <h4 className="text-secondary">CUSTOMER SUPPORT</h4>
        <NavLink style={{textDecoration:'none',color:'white'}} to="/aboutus">ABOUT</NavLink> <br/>
        <NavLink style={{textDecoration:'none',color:'white'}} to="faq">FAQ</NavLink> <br/>
        Help and Ordering <br />
        Privacy Policy <br />
        Return & Cancellation <br />
        Delevery Schedule <br />
         
         
         
        </div>

        </div>
       
                </div>
                <div className="col-md-3">
                    <div>
                    <h4 className="text-secondary">NEWSLETTER</h4>
                <p><small>
                    Enter your email and we’ll send you latest information plans.
                </small></p>
             
                      
                     <input style={{outline:'none'}} type="email" placeholder="Enter your Email" />
                    <br />
                    <button className="bg-info p-2 m-2 text-white rounded-pill">SUBSCRIBE US</button>
                    </div>
             </div>
    </div>
            
    <hr/>
    <p className='pt-2 text-white'><small>&copy; Copyright 2022 || All Right Reserved BABY PLANET.</small></p>
</div>
    );
};

export default Footer;