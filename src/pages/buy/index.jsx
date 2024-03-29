import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import SearchSection from "../../component/search-section/index";
import NothingSearched from "../../component/nothing-searched/index";
import ServicesList from "../../component/services-list/index";

const Buy = () => {
  const [servicesList, setServicesList] = useState([]);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  return (
    <div className="w-full bg-[#F6F6F6] h-4/5 flex flex-col items-center pt-12">
      <SearchSection />
      {query.get("servicesList") ? <ServicesList /> : <NothingSearched />}
    </div>
  );
};

export default Buy;
