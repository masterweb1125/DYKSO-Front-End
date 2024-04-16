import React from 'react';
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import camera from '../assets/camera.png';
import linkedin from '../assets/linkedin.png';
import video from '../assets/video.png';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../App.css";
import { useSelector } from 'react-redux';

const Footer = () => {

    

    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6 d-flex align-items-center bg-white">
                    <div className="row w-100 justify-content-start">
                        <div className="col-4 bg-white text-center">
                            <img src={logo} alt='logo'/>
                        </div>
                        <div className="col-2 bg-white text-start custom-font">Home</div>
                        <div className="col-2 bg-white text-start custom-font">Contact Us</div>
                        <div className="col-2 bg-white text-start custom-font">Help & Support</div>
                    </div>
                </div>
                <div className="col-12 col-md-6 bg-white d-flex align-items-center justify-content-end">
                    <div className="col-1 bg-white text-center custom-font">
                        <img src={facebook} alt='facebook'/>
                    </div>
                    <div className="col-1 bg-white text-center custom-font">
                        <img src={camera} alt='camera'/>
                    </div>
                    <div className="col-1 bg-white text-center custom-font">
                        <img src={linkedin} alt='linkeidn'/>
                    </div>
                    <div className="col-1 bg-white text-center custom-font">
                        <img src={video} alt='video'/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-start bg-white">
                    Copyright © 2023. All Rights Reserved
                </div>
                <div className="col-12 col-md-6 bg-white d-flex align-items-center justify-content-end custom-font">
                    Privacy Policy | Terms & Conditions
                </div>
            </div>
        </>
    );
  };

  
  export default Footer;