import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchSection from "../../component/search-section/index";
import NothingSearched from "../../component/nothing-searched/index";
import ServicesList from "../../component/services-list/index";
import ServiceName from "./service-name";
import { getCurrentLocationZipCode } from "../../utils/getCurrentLocationZipCode";
import { useSelector } from "react-redux";

const Buy = () => {
  const [filter, setFilter] = useState("");
  const [zipCode, addZipCode] = useState("");
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);


  const data = useSelector((state) => state?.user?.token);
  console.log("token in buy page: ", data)


  const getCurrentLocation =  async() => {
    const zipCode = await getCurrentLocationZipCode();
    if (zipCode !== undefined && zipCode !== null) {
        addZipCode(zipCode);
      console.log("current location zipCode is: ", zipCode)
    }
  }

  useEffect(() => {
    getCurrentLocation();
  }, [])


  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const renderContent = () => {
    if (queryParams.get("servicesList")) {
      return <ServicesList filter={filter} />;
    } else if (queryParams.get("serviceName")) {
      return <ServiceName />;
    } else {
      return <NothingSearched />;
    }
  };



  return (
    <div className="w-full bg-[#F6F6F6] h-4/5 flex flex-col items-center pt-12">
      <SearchSection zipCode={zipCode} onFilterChange={handleFilterChange} currentPage="buy service" />
      {renderContent()}
    </div>
  );
};

export default Buy;
