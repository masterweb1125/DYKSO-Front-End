import React, { useState, useEffect } from "react";
import SearchIcon from "../../assets/imgs/search.svg";
import LocationIcon from "../../assets/imgs/location.svg";
import GpsIcon from "../../assets/imgs/gps.svg";
import {Link} from "react-router-dom";

const SearchSection = ({ onFilterChange }) => {
  const [placeholder, setPlaceholder] = useState(
    "Just start typing here what you want to buy / search. Results will automatically appear."
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1050) {
        setPlaceholder("Just start typing here...");
      } else {
        setPlaceholder(
          "Just start typing here what you want to buy / search. Results will automatically appear."
        );
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="bg-white rounded-2xl md:rounded flex flex-col w-full max-w-[80%] mx-8 min-[1050px]:mx-0 my-4 px-6 py-8">
      <h2 className="text-2xl text-light-black font-semibold">
        Buy/Search Services
      </h2>
      <div className="flex flex-col justify-center items-center min-[1025px]:flex-row mt-6">
        <div className="w-[100%] lg:w-[60%] mt-4 lg:mt-0 lg:mr-3">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img src={SearchIcon} alt="search" />
            </div>
            <input
              type="search"
              onChange={onFilterChange}
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-[#8C8C8C] border border-[#A9A9A9] rounded bg-gray-50 focus:ring-custom-green focus:border-custom-green placeholder-[20px] sm:placeholder-[16px]"
              placeholder={placeholder}
            />
          </div>
        </div>

        <div className="w-[100%] lg:w-[20%] mt-4 lg:mt-0 lg:mr-3">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img src={LocationIcon} alt="location" />
            </div>
            <input
              type="text"
              className="block w-full p-4 ps-10 text-sm text-[#8C8C8C] border border-[#A9A9A9] rounded bg-gray-50 focus:ring-custom-green focus:border-custom-green"
              placeholder="Enter Zip Code"
            />
          </div>
        </div>
        <Link
          className="border-none bg-custom-green text-white text-xs rounded flex justify-center items-center w-[100%] h-[54px] lg:w-[20%] mt-4 lg:mt-0"
          to="/buy?servicesList=true"
        >
          <img src={GpsIcon} alt="gps" className="mr-3" />
          Find my Location
        </Link>
      </div>
    </section>
  );
};

export default SearchSection;
