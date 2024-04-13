import { useEffect, useState } from "react";
import SearchSection from "../../component/search-section/index";
import AdditionalInfo from "../../component/additional-info/index";
import { getCurrentLocationZipCode } from "../../utils/getCurrentLocationZipCode";

const Sell = () => {
  const [additionalInfo, setAdditionalInfo] = useState([]);
  const [zipCode, addZipCode] = useState("");

  const getCurrentLocation = async () => {
    const zipCode = await getCurrentLocationZipCode();
    if (zipCode !== undefined && zipCode !== null) {
      addZipCode(zipCode);
      console.log("current location zipCode is: ", zipCode)
    }
  }

  useEffect(() => {
    getCurrentLocation();
  }, [])

  return (
    <div className="w-full bg-[#F6F6F6] h-4/5 flex flex-col items-center pt-12">
      <SearchSection currentPage="sell service" zipCode={zipCode} />
      <AdditionalInfo
        additionalInfo={additionalInfo}
        setAdditionalInfo={setAdditionalInfo}
      />
    </div>
  );
};

export default Sell;
