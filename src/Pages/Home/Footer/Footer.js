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
                <div className='px-4 py-3'>
                <div className='logo'> Baby <span className='span'>Planet</span></div>
                <div className="d-flex justify-content-between align-items-center py-2">
                <div>Address: <small>Herba Street Front USA</small></div>      
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                <div>Email: <small>support@tadathemes.com </small></div>      
                </div>
                <div className=" d-flex    align-items-center justify-content-between py-2">
             <div>Phone us: <small>002- 01008431112</small></div>
            </div>

            <div className=" d-flex align-items-center justify-content-around pt-3 fs-4 text-white">
                 
                  
                 <FontAwesomeIcon icon={faFacebookF} />
                 <FontAwesomeIcon icon={faGithub} />
                 <FontAwesomeIcon icon={faLinkedin} />
                 <FontAwesomeIcon icon={faTwitterSquare} />
                
                            
              </div>
              </div>
    </div>
    </div>
        
        
    </div>
                </div>
            <div className="col-md-3">
            <div>
           <h5 style={{color:'rgb(55, 53, 53)'}}>Our categories</h5>
           <hr/>
           <small>Clothing Sets</small> <br/>
           <small>Baby Girl Sets</small><br/>
           <small>Baby Boys Sets</small><br/>
           <small>Free Shipping
            & Exchange</small><br/>
           <small>Testimonials</small>
            </div>
            </div>

        <div className="col-md-3">
        <div className="">
        <div>
        <h5 style={{color:'rgb(55, 53, 53)'}}>Customer support</h5>
        <hr/>
        <NavLink style={{textDecoration:'none',color:'rgb(55, 53, 53)'}} to="/aboutus"><small>About us</small></NavLink> <br/>
        <NavLink style={{textDecoration:'none',color:'rgb(55, 53, 53)'}} to="faq"><small>Help & FAQ</small></NavLink> <br/>
        <small>Privacy Policy </small> <br/>
        <small>Delivery schedule </small> <br/>
        <small>Exchanging</small> <br/>
        </div>
        </div>
        </div>

        <div className="col-md-3">
        <div >
        <h5 style={{color:'rgb(55, 53, 53)'}}>Newsletter</h5>
        <hr/>
        <p><small>
         Enter your email and we’ll send you latest information plans.
         </small></p>                      
         <input className='p-2' style={{outline:'none',borderRadius:'7px',border:'none'}} type="email" placeholder="Enter your Email" />
         <br />
        <button className="p-2 m-2 text-white bg-info rounded-pill border">Subscribe us</button>
        </div>
        </div>
    </div>
            
    <hr/>
    <div>
    <div>
    <p style={{color:'rgb(55, 53, 53)'}} className='pt-2'><small>&copy; Copyright 2022 || All Right Reserved BABY PLANET.</small></p>
    </div>
    <div>

    </div>
    </div>
    
</div>
    );
};

export default Footer;