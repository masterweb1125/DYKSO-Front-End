import { useRef, useState } from "react";
import Camera from "../../assets/imgs/cam.png";
import {  Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCaptureData } from "../../redux/feature/generalSlice";

const Main = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const CaptureRef = useRef();

  const UploadAttachments = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      dispatch(AddCaptureData(file));
      navigate("/sell")
    }
  }

  return (
    <section className="w-full pt-8 bg-[#F6F6F6] flex items-center justify-center">
      <div className="flex flex-col gap-8 lg:flex-row lg:flex-wrap justify-center items-center w-full">
        {/* First Row of Cards */}
        <Link
          className="lg:w-2/5 my-0 p-11 lg:mr-10 bg-white h-[270px] rounded-2xl flex justify-center items-center lg:text-4xl text-3xl text-light-black hover:text-white cursor-pointer text-center"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundImage:
              hoveredIndex === 0
                ? "linear-gradient(to bottom right, #00A69E, #B3FEA0)"
                : "none",
            transition: "background-image 0.3s ease",
          }}
          to="/buy"
        >
          <span className="w-[320px] md:w-[420px] lg:w-[500px]">
            I’m here to buy/search for something
          </span>
        </Link>
        <Link
          className="lg:w-2/5 p-11 mb-8 lg:mb-0 bg-white h-[270px] rounded-2xl flex justify-center items-center lg:text-4xl text-3xl text-light-black hover:text-white cursor-pointer text-center"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundImage:
              hoveredIndex === 1
                ? "linear-gradient(to bottom right, #00A69E, #B3FEA0)"
                : "none",
            transition: "background-image 0.3s ease",
          }}
          to="/sell"
        >
          <span className="w-[320px] md:w-[420px] lg:w-[500px]">
            I’m here to Sell/Request/Post something
          </span>
        </Link>

        {/* Second Row of Cards */}
        <Link
          className="lg:w-2/5 lg:mr-10 mb-8 p-11 bg-white h-[270px] rounded-2xl flex justify-center items-center lg:text-4xl text-3xl text-light-black hover:text-white cursor-pointer text-center"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundImage:
              hoveredIndex === 2
                ? "linear-gradient(to bottom right, #00A69E, #B3FEA0)"
                : "none",
            transition: "background-image 0.3s ease",
          }}
          to="/buy?servicesList=true"
        >
          <span className="w-[320px] md:w-[420px] lg:w-[500px]">
            Not ready for anything just yet? Click here to see what others are
            selling or requesting or have posted in your area
          </span>
        </Link>
        
        <div
          onClick={() => CaptureRef.current.click()}
          className="lg:w-2/5 p-11 mb-8 bg-white h-[270px] rounded-2xl flex justify-center items-center lg:text-4xl text-3xl text-light-black hover:text-white cursor-pointer text-center"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundImage:
              hoveredIndex === 3
                ? "linear-gradient(to bottom right, #00A69E, #B3FEA0)"
                : "none",
            transition: "background-image 0.3s ease",
          }}
          // to="/sell"
        >
          <div className="flex flex-col justify-center items-center w-[320px] md:w-[420px] lg:w-[500px]">
            <img src={Camera} alt="cam" className="mb-3 w-[120px] h-[120px]" />
            Capture and post
          </div>
        </div>

        {/* capture an image and an uploading it */}
        <div className="hidden">
          <input
            accept="image/*"
            ref={CaptureRef}
            onChange={UploadAttachments}
            type="file"
            capture="environment"
            name="image"
          />
        </div>

      </div>
    </section>
  );
};

export default Main;
