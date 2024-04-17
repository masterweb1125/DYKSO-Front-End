import React from "react";
import ResultsRow from "./row/index";

const ServicesList = ({ filter, servicesData }) => {
  console.log("service data length: ", servicesData.length)
  const filteredData = servicesData.filter(data =>
    data.service_info.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="bg-white rounded-2xl md:rounded flex flex-col justify-center items-between w-full max-w-[80%] h-[auto] mx-8 min-[1050px]:mx-0 my-4 px-6 py-8 mb-20">
      {servicesData.length > 0 ? (
        <>
          {filteredData.map((data, index) => (
            <React.Fragment key={index}>
              <ResultsRow bidTitle={data.service_info} key={index + "-bid-title"} />
              {index !== filteredData.length - 1 && <hr className="my-5" />}{" "}
            </React.Fragment>
          ))}
        </>
      ) : (
        <h2>No Service found</h2>
      )}
      
    </div>
  );
};

export default ServicesList;
