import React from "react";
import logo from "../../assets/imgs/logo.png";
import facebook from "../../assets/imgs/facebook.png";
import camera from "../../assets/imgs/camera.png";
import linkedin from "../../assets/imgs/linkedin.png";
import video from "../../assets/imgs/video.png";
import { useSelector } from "react-redux";

const Footer = () => {


  return (
    <div className="w-full fixed bottom-0 max-h-[130px] px-[80px]  flex flex-col justify-center bg-white" >
      <div className=" hidden flex-col lg:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mb-4 lg:mb-0">
          <a href="/" className="cursor-pointer">
            <img src={logo} alt="logo" className="w-[155px] h-[42px]" />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-row items-center mb-4 lg:mb-0">
          <a
            href="/"
            className="text-base lg:text-lg no-underline text-light-black hover:text-custom-green mr-5"
          >
            Home
          </a>
          <a
            href="/contact-us"
            className="text-base lg:text-lg no-underline text-light-black hover:text-custom-green mr-5"
          >
            Contact Us
          </a>
          <a
            href="/contact-us"
            className="text-base lg:text-lg no-underline text-light-black hover:text-custom-green"
          >
            Help & Support
          </a>
        </div>

        {/* Social Links */}
        <div className="flex">
          <a href="/" className="w-8 h-8 cursor-pointer">
            <img src={facebook} alt="facebook" className="w-full h-full" />
          </a>
          <a href="/" className="w-8 h-8 cursor-pointer ml-2">
            <img src={camera} alt="camera" className="w-full h-full" />
          </a>
          <a href="/" className="w-8 h-8 cursor-pointer ml-2">
            <img src={linkedin} alt="linkedin" className="w-full h-full" />
          </a>
          <a href="/" className="w-8 h-8 cursor-pointer ml-2">
            <img src={video} alt="video" className="w-full h-full" />
          </a>
        </div>
      </div>
      {/* <hr className="border-t-2 border-gray-200 my-0" /> */}
      <div className="flex flex-col py-3 lg:flex-row justify-between items-center">
        <div className="text-light-gray text-base mb-4 lg:mb-0">
          Copyright © 2023. All Rights Reserved
        </div>
        <a
          href="/privacy-policy"
          className="text-light-gray text-base no-underline cursor-pointer"
        >
          Privacy Policy | Terms & Conditions
        </a>
      </div>
    </div>
  );
};

export default Footer;
