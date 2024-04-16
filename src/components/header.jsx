import React from 'react';
import logo from '../assets/logo.png';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../App.css";

const Header = () => {

    return (
      <div className="row bg-white">
        <div className="col-12 col-md-6 d-flex align-items-center bg-white">
          <div className="row w-100 justify-content-start">
            <div className="col-4 bg-white text-center">
              <img src={logo} alt="logo" />
            </div>
            <div className="col-2 bg-white text-start custom-font">Home</div>
            <div className="col-2 bg-white text-start custom-font">
              Contact Us
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 bg-white d-flex align-items-center justify-content-end">
          <div className="row w-100 justify-content-end">
            {false ? (
              <>
                <div className="col-2 bg-white text-center custom-font">
                  Logout
                </div>
              </>
            ) : (
              <>
                <div className="col-2 bg-white text-center custom-font">
                  Register
                </div>
                <div className="col-2 bg-white text-center custom-font">
                  Login
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  
  export default Header;