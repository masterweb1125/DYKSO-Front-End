import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 
import nothing from '../assets/nothing.png';

import "../App.css";

const Buy = () => {

    const [findLocation, setFindLocation] = useState(false);

    const handleButtonClick = () => {
      setFindLocation(true);
    };

    return (
      <div className="container-fluid h-100" style={{ width: "100vw", background: "#BBBBBB" }}>
        <div className="row d-flex align-items-center justify-content-center" style={{ height: "70vh" }}>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center bg-white" style={{ height: "15vh", width: "90%", borderRadius: "10px" }}>
            <div className='row custom-font h-50 align-items-center' style={{ marginLeft: "40px",  fontWeight: "bold", fontSize: "20px"}} >
              Buy/Search services
            </div>
            <div className='row h-50 justify-content-center'>
              <input className="col-12 col-md-7 d-flex flex-column justify-content-center mx-2 mb-4" placeholder="Type here what you want to sell / request / post. Required" style={{borderRadius: "6px", border: "1px solid #ccc", outline: "none"}}></input>
              <input className="col-12 col-md-2 d-flex flex-column justify-content-center mx-2 mb-4" placeholder="Enter zip code" style={{borderRadius: "6px", border: "1px solid #ccc", outline: "none"}}></input>
              <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-2 mb-4 btn button-custom" onClick={handleButtonClick}>Find My Location</button>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center bg-white mt-1" style={{ height: "45vh", width: "90%", borderRadius: "10px" }}>
            {!findLocation ? (
                <>
                  <div className='d-flex flex-column justify-content-center'>
                  <img src={nothing} alt='nothing'/>
                  </div>
                  <div className='d-flex flex-column justify-content-center' style={{fontWeight: "bold", fontSize: "20px"}}>What are you searching for?</div>
                  <div className='d-flex flex-column justify-content-center' style={{color: "#8C8C8C", fontSize: "16px"}}>Search for the service you need and find results in this area.</div>
                </>           
              ) : (
                <div className='d-flex flex-column justify-content-center h-100 w-100'>
                  <div className="d-flex flex-row justify-content-center align-items-center" style={{ height: "20%", borderBottom: "1px solid #ccc" }}>
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-start mx-2">
                      I can help you with PowerPoint presentations.
                    </div>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Chat</button>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Email</button>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Mark For Follow Up</button>
                  </div>
                  <div className="d-flex flex-row justify-content-center align-items-center" style={{ height: "20%", borderBottom: "1px solid #ccc" }}>
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-start mx-2">
                      I can do interior designing for your house.
                    </div>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Chat</button>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Email</button>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Mark For Follow Up</button>
                  </div>
                  <div className="d-flex flex-row justify-content-center align-items-center" style={{ height: "20%", borderBottom: "1px solid #ccc" }}>
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-start mx-2">
                    I have a license to babysit children. I can take your dog outside for a walk.
                    </div>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Chat</button>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Email</button>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Mark For Follow Up</button>
                  </div>
                  <div className="d-flex flex-row justify-content-center align-items-center" style={{ height: "20%", borderBottom: "1px solid #ccc" }}>
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-start mx-2">
                      I can repair tankless water heater.
                    </div>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Chat</button>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Email</button>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Mark For Follow Up</button>
                  </div>
                  <div className="d-flex flex-row justify-content-center align-items-center" style={{ height: "20%", borderBottom: "1px solid #ccc" }}>
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-start mx-2">
                      I can mow your lawn and paint your house.
                    </div>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Chat</button>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Email</button>
                    <button className="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center mx-4 btn button-s">Mark For Follow Up</button>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  };

  
  export default Buy;