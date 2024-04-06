import React from "react";
import ResultsRow from "./row/index";
import { fakeData } from "../../assets/strings/fakeData";

const ServicesList = ({ filter }) => {
  const filteredData = fakeData.filter(data =>
    data.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="bg-white rounded-2xl md:rounded flex flex-col justify-center items-between w-full max-w-[80%] h-[auto] mx-8 min-[1050px]:mx-0 my-4 px-6 py-8 mb-20">
      {filteredData.map((data, index) => (
        <React.Fragment key={index}>
          <ResultsRow bidTitle={data} key={index + "-bid-title"} />
          {index !== filteredData.length - 1 && <hr className="my-5" />}{" "}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ServicesList;
