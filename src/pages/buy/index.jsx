import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchSection from "../../component/search-section/index";
import NothingSearched from "../../component/nothing-searched/index";
import ServicesList from "../../component/services-list/index";
import ServiceName from "./service-name";
import { getCurrentLocationZipCode } from "../../utils/getCurrentLocationZipCode";
import { useSelector } from "react-redux";
import { API_DOMAIN } from "../../redux/api";
import { toast } from "react-toastify";

const Buy = () => {
  const [filter, setFilter] = useState("");
  const [services, setservices] = useState([]);
  const [zipCode, addZipCode] = useState("");
  const [followUpList, setfollowupList] = useState(false);
  const { search } = useLocation();

  const queryParams = useMemo(() => new URLSearchParams(search), [search]);
  const user = useSelector((state) => state?.user?.userData);

  const FetchingServices = async (zip_code) => {
    try {
      const res = await API_DOMAIN.get(`/api/v1/service/allservices/${user?._id}`);
      if (res.status === 200) {
        // Sort services based on proximity to the passed zip code
        const sortedServices = res?.data?.data.sort((a, b) => {
          // Calculate absolute differences between each service's zip code and the passed zip code
          const distanceA = Math.abs(parseInt(a.zipCode) - parseInt(zip_code));
          const distanceB = Math.abs(parseInt(b.zipCode) - parseInt(zip_code));
          return distanceA - distanceB;
        });
        setservices(sortedServices);
      }
    } catch (error) {
      console.log("something went wrong while fetching services data: ", error);
      toast.error("Something went wrong");
    }
  
  }

  const getCurrentLocation =  async() => {
    const zipCode = await getCurrentLocationZipCode();
    if (zipCode !== undefined && zipCode !== null) {
      FetchingServices(zipCode);
      addZipCode(zipCode);
    }
  }


  useEffect(() => {
    getCurrentLocation();
    console.log("zip code in main file: ", zipCode)
  }, [])


  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const renderContent = () => {
    if (queryParams.get("serviceName")) {
      return <ServiceName />;
    } else {
      // return <NothingSearched />;
      return <ServicesList IsfollowUpList={followUpList} filter={filter} servicesData={services} />;

    }
  };

console.log("queryParams: " + queryParams)

  return (
    <div className="w-full bg-[#F6F6F6] h-4/5 flex flex-col items-center pt-12">
      <SearchSection followUpList={followUpList} setfollowupList={setfollowupList} addZipCode={addZipCode} setservices={setservices} zipCode={zipCode}  onFilterChange={handleFilterChange} currentPage="buy-service" />
      {renderContent()}
    </div>
  );
};

export default Buy;
