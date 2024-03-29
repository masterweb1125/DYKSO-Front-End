import { useState } from "react";
import SearchSection from "../../component/search-section/index";
import AdditionalInfo from "../../component/additional-info/index";

const Sell = () => {
  const [additionalInfo, setAdditionalInfo] = useState([]);

  return (
    <div className="w-full bg-[#F6F6F6] h-4/5 flex flex-col items-center pt-12">
      <SearchSection />
      <AdditionalInfo
        additionalInfo={additionalInfo}
        setAdditionalInfo={setAdditionalInfo}
      />
    </div>
  );
};

export default Sell;
