import React from "react";
import ResultsRow from "./row/index";
import { fakeData } from "../../assets/strings/fakeData";

const ServicesList = () => {
  return (
    <div className="bg-white rounded-2xl md:rounded flex flex-col justify-center items-between w-full max-w-[80%] h-[auto] mx-8 min-[1050px]:mx-0 my-4 px-6 py-8 mb-20">
      {fakeData.map((data, index) => (
        <React.Fragment key={index}>
          <ResultsRow bidTitle={data} key={index + "-bid-title"} />
          {index !== fakeData.length - 1 && <hr className="my-5" />}{" "}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ServicesList;
