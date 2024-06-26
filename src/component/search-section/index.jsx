import React, { useState, useEffect } from "react";
import SearchIcon from "../../assets/imgs/search.svg";
import LocationIcon from "../../assets/imgs/location.svg";
import GpsIcon from "../../assets/imgs/gps.svg";
import {Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { API_DOMAIN } from "../../redux/api";
import { CiBookmarkMinus } from "react-icons/ci";

const SearchSection = ({ zipCode, followUpList, setfollowupList, onFilterChange, currentPage, addserviceTitle, serviceTitle, addZipCode, setservices, FetchingServices }) => {
  const [placeholder, setPlaceholder] = useState();
  const user = useSelector((state) => state?.user?.userData);
  const navigate = useNavigate();

  
  const handleFollowUp = () => {
    setfollowupList((prev)=> !prev)
  }
  
  const handleZipCode = async (updatedZipCode) => {
    if (currentPage === "buy-service") {
      FetchingServices(updatedZipCode);
    }

    else if (currentPage === "sell-service") {
       addZipCode(updatedZipCode)
    }
   
  }

  // ----------- handle my location ---------
  const handleMyLocation = () => {
    if (currentPage === "sell-service") {
      navigate("/sell");
    } else if (currentPage === "buy-service")  {
      window.location.reload();

    }
  }

  useEffect(() => {
    setPlaceholder(currentPage === "sell-service" ? "Type here what you want to sell / request / post. Required" :
        "Just start typing here what you want to buy / search. Results will automatically appear."
    );
    
  }, [placeholder]);

  return (
    <section className="bg-white rounded-2xl md:rounded flex flex-col w-full max-w-[80%] mx-8 min-[1050px]:mx-0 my-4 px-6 py-8">
      <h2 className="text-2xl text-light-black font-semibold">
        {currentPage === "sell-service" ? "Sell/Request services" : "Buy/Search Services"}
        
      </h2>
      <div className="flex flex-col justify-center items-center min-[1025px]:flex-row mt-6">
        <div className="w-[100%] lg:w-[60%] mt-4 lg:mt-0 lg:mr-3">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img src={SearchIcon} alt="search" />
            </div>
 
            {currentPage === "sell-service" ? (
              <>
                <input
                  type="text"
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (inputValue.length <= 140) {
                      addserviceTitle(inputValue);
                    } else {
                      toast.error("Character limit exceeded (Max: 140)");
                    }
                  }}
                  defaultValue={serviceTitle || ""}
                  id="default-search"
                  className={`block w-full p-4 ps-10 text-sm text-[#8C8C8C] border ${serviceTitle.length >= 140 ? "border-red-600" : "border-[#A9A9A9]"}  rounded bg-gray-50 ${serviceTitle.length >= 140 ? "focus:ring-custom-green focus:border-custom-green" : "focus:ring-red-600 focus:border-red-600"}   placeholder-[20px] sm:placeholder-[16px]`}
                  placeholder={placeholder}
                />

                {serviceTitle.length >= 140 && (
                  <> <p className="text-red-600">Character limit exceeded (Max: 140)</p> </>
                )}
              </>
            ) : <>
                <input
                  type="search"
                  onChange={onFilterChange}
                
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-[#8C8C8C] border border-[#A9A9A9] rounded bg-gray-50 focus:ring-custom-green focus:border-custom-green placeholder-[20px] sm:placeholder-[16px]"
                  placeholder={placeholder}
                />
            </>}
           


          </div>
        </div>

        <div className="w-[100%] lg:w-[20%] mt-4 lg:mt-0 lg:mr-3">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img src={LocationIcon} alt="location" />
            </div>
            <input
              type="number"
              onChange={(e) => handleZipCode(e.target.value)}
              // onChange={(e)=>addZipCode(e.target.value)}
              className="block w-full p-4 ps-10 text-sm text-[#8C8C8C] border border-[#A9A9A9] rounded bg-gray-50 focus:ring-custom-green focus:border-custom-green"
              placeholder="Enter Zip Code"
              defaultValue={zipCode}
            />
          </div>
        </div>
        <button onClick={handleMyLocation}
          className="border-none bg-custom-green text-white text-xs rounded flex justify-center items-center w-[100%] h-[54px] lg:w-[20%] mt-4 lg:mt-0"
        >
          <img src={GpsIcon} alt="gps" className="mr-3" />
          Find my Location
        </button>

        {/* ---- follow up button ---- */}
        {user?._id && (
          <button onClick={handleFollowUp}
            className={`ml-3 border-none bg-yellow-500 hover:bg-yellow-600  text-white text-xs rounded gap-2 flex justify-center items-center w-[100%] h-[54px] lg:w-[18%] mt-4 lg:mt-0  ${currentPage === "sell-service" ? "hidden" : "flex"}`}
          >
            <span className="text-[1.2rem] font-bold text-white"><CiBookmarkMinus /></span>
            Posts Marked for Follow-up
          </button>
        )}
        


      </div>
    </section>
  );
};

export default SearchSection;
