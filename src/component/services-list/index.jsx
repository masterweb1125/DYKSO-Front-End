import React, { useState, useEffect } from "react";
import ResultsRow from "./row/index";
import { useSelector } from "react-redux";

const ServicesList = ({ filter, servicesData, IsfollowUpList }) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state?.user?.userData);
  // Update loading state when servicesData changes
  useEffect(() => {
    setIsLoading(servicesData?.length === undefined);
  }, [servicesData]);

  const filteredData = servicesData?.filter(data =>
    data.serviceTitle.toLowerCase().includes(filter?.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl md:rounded flex flex-col justify-center items-between w-full max-w-[80%] h-[auto] mx-8 min-[1050px]:mx-0 my-4 px-6 py-8 mb-20">
      {servicesData?.length === undefined ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {filteredData?.map((data, index) => (
              <> 
              {IsfollowUpList && user?.follow_up?.includes(data?._id) && ( <><ResultsRow service_id={data?._id} bidTitle={data.serviceTitle} IsfollowUpList={IsfollowUpList} key={index + "-bid-title"} /><React.Fragment key={index}>
              {index !== filteredData?.length - 1 && <hr className="my-5" />}
            </React.Fragment></>
            ) }
            
           {  !IsfollowUpList && (<><ResultsRow service_id={data?._id} bidTitle={data.serviceTitle} IsfollowUpList={IsfollowUpList} key={index + "-bid-title"} /><React.Fragment key={index}>
              {index !== filteredData?.length - 1 && <hr className="my-5" />}
            </React.Fragment></>
            ) }
            </>
          ))}
        </>
      )}
      {servicesData?.length <= 0 && <h2>No Service found</h2>}
        
      
    </div>
  );
};

export default ServicesList;
