import React from 'react';
import capture from '../assets/capture.png';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from "../components/header";
import Footer from "../components/footer";

const Main = () => {

    return (
      <div className="container-fluid h-100" style={{ width: "100%", background: "#BBBBBB" }}>
        <div className="row bg-white" style={{ height: "10vh" }}>
          <Header />
        </div>
        <div className="row" style={{ height: "70vh" }}>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center bg-light h-100">
            <div className="d-flex align-items-center flex-grow-1 main-con mt-4" onClick={() => window.location.href = '/buy'}>
              <span>I am here to</span>
              <span>buy / search for something</span>
            </div>
            <div className="d-flex align-items-center flex-grow-1 main-con mb-4 mt-4" onClick={() => window.location.href = '/list'}>
              <span>Not ready for anything just yet?</span>
              <span>Click here to see what others are</span>
              <span>selling or requesting or have</span>
              <span>posted in your area</span>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center bg-light h-100">
            <div className="d-flex align-items-center flex-grow-1 main-con mt-4" onClick={() => window.location.href = '/sell'}>
              <span>I am here to</span>
              <span>sell / request / post something</span>
            </div>
            <div className="d-flex align-items-center flex-grow-1 main-con mb-4 mt-4" onClick={() => window.location.href = '/capture'}>
              <img src={capture} alt='capture'/>
              <span>Capture and post</span>
            </div>
          </div>
        </div>
        <div className="row bg-white" style={{ height: "20vh" }}>
          <Footer />
        </div>
      </div>
    );
  };

  
  export default Main;