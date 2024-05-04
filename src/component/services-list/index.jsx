import React, { useState, useEffect } from "react";
import ResultsRow from "./row/index";

const ServicesList = ({ filter, servicesData }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Update loading state when servicesData changes
  useEffect(() => {
    setIsLoading(servicesData?.length === undefined);
  }, [servicesData]);

  const filteredData = servicesData?.filter(data =>
    data.service_info.toLowerCase().includes(filter?.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl md:rounded flex flex-col justify-center items-between w-full max-w-[80%] h-[auto] mx-8 min-[1050px]:mx-0 my-4 px-6 py-8 mb-20">
      {servicesData?.length === undefined ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {filteredData?.map((data, index) => (
            <React.Fragment key={index}>
              <ResultsRow service_id={data?._id} bidTitle={data.serviceTitle} key={index + "-bid-title"} />
              {index !== filteredData?.length - 1 && <hr className="my-5" />}{" "}
            </React.Fragment>
          ))}
        </>
      )}
      {servicesData?.length <= 0 && <h2>No Service found</h2>}
        
      
    </div>
  );
};

export default ServicesList;
