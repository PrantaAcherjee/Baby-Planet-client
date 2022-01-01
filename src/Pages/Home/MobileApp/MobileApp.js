import React from 'react';
import "./MobileApp.css"
const MobileApp = () => {
    return (
        <div className="py-4">
            <h2 className="h-2">Download Our Mobile App</h2>
            <br />
            <div className="row">
                <div className="col-md-3 background">
                    <h4 className="mobile-head">Have you tried our mobile app?</h4>
                    <br /><br />
                    <p>Best website,Over 30,000  BABY WALKER worldwide. Book travel packages and enjoy your holidays with distinctive experience</p>
                    <br /><br /><br />
                    <ul className="text-white fw-10">
                        <li>
                        Relaxable Seats
                         </li>
                         <br />
                        <li>
                        Beautifull looks
                        </li>
                        <br />
                        <li>
                        Quality Reviews and Ratings
                        </li>
                        <br />
                        <li>
                        Take your Walker
                        </li>
                        <br />
                        <li>
                        Enquiry and Reviews 
                        </li>
                    </ul>

                </div>
                <div className="col-md-9">
                    <img className='img-fluid' src="http://rn53themes.net/themes/demo/travelz/images/mobile.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MobileApp;