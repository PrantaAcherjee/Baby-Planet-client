import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitterSquare,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';

import "./Footer.css"
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 200"><path fill="#3df7eb" fill-opacity="1" d="M0,160L18.5,170.7C36.9,181,74,203,111,186.7C147.7,171,185,117,222,112C258.5,107,295,149,332,138.7C369.2,128,406,64,443,53.3C480,43,517,85,554,122.7C590.8,160,628,192,665,176C701.5,160,738,96,775,74.7C812.3,53,849,75,886,112C923.1,149,960,203,997,192C1033.8,181,1071,107,1108,101.3C1144.6,96,1182,160,1218,176C1255.4,192,1292,160,1329,144C1366.2,128,1403,128,1422,128L1440,128L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
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

            <div className=" d-flex align-items-center justify-content-around pt-3 fs-2 text-white">
                 
                  
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
</>
);
};

export default Footer;