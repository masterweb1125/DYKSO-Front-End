import React from "react";
import NothingSearchedIcon from "../../assets/imgs/nothing-searched.png";

const NothingSearched = () => {
  return (
    <section className="bg-white rounded-2xl md:rounded flex flex-col justify-center items-center w-full max-w-[80%] h-[320px] md:h-[500px] mx-8 min-[1050px]:mx-0 my-4 px-6 py-8 mb-20">
      <img src={NothingSearchedIcon} alt="" className="w-36 h-18" />
      <h2 className="text-light-black text-xl md:text-2xl font-semibold mt-2 text-center">
        What are you searching for?
      </h2>
      <p className="text-[#8C8C8C] text-xs md:text-sm font-normal md:font-medium mt-1 text-center">
        Search for the service you need and find results in this area.
      </p>
    </section>
  );
};

export default NothingSearched;
