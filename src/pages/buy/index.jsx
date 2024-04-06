import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import SearchSection from "../../component/search-section/index";
import NothingSearched from "../../component/nothing-searched/index";
import ServicesList from "../../component/services-list/index";
import ServiceName from "./service-name";

const Buy = () => {
  const [servicesList, setServicesList] = useState([]);
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  const renderContent = () => {
    if (queryParams.get("servicesList")) {
      return <ServicesList />;
    } else if (queryParams.get("serviceName")) {
      return <ServiceName />;
    } else {
      return <NothingSearched />;
    }
  };

  return (
    <div className="w-full bg-[#F6F6F6] h-4/5 flex flex-col items-center pt-12">
      <SearchSection />
      {renderContent()}
    </div>
  );
};

export default Buy;
