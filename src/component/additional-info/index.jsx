import React from "react";
import uploadIcon from "../../assets/imgs/upload-icon.svg";
import pdfIcon from "../../assets/imgs/pdf-icon.svg";

const AdditionalInfo = (props) => {
  const { additionalInfo, setAdditionalInfo } = props;

  return (
    <section className="bg-white rounded-2xl md:rounded flex flex-col w-full max-w-[80%] mx-8 lg:mx-0 my-4 px-6 py-8 mb-20 ">
      <h2 className="text-xl mb-4">Additional Information</h2>
      <textarea
        className="w-full mb-8 h-[200px] p-5 rounded border border-[#9B9B9B]"
        value={additionalInfo}
        placeholder="Enter here any additional information you want to share."
        onChange={(e) => {
          setAdditionalInfo(e.target.value);
        }}
      />

      <h2 className="text-xl mb-4">Attachments</h2>

      <div className="flex items-center justify-center gap-3 mb-7 max-w-[475px] py-8 bg-[#EBF8F7] border border-dashed border-[#03A89E] rounded cursor-pointer">
        <img src={uploadIcon} alt="uploadIcon" />
        <p className="text-lg ">Drag & Drop or Browse</p>
      </div>

      <div className="flex items-center justify-between gap-3 max-w-[475px] py-3 px-5 bg-[#FBFBFB] border border-[#03A89E] rounded">
        <div className="flex gap-4 items-center">
          <img src={pdfIcon} alt="pdfIcon" />
          <p className="text-xl">My services packages.PDF</p>
        </div>
        <p className="text-xl">3.5 MB</p>
      </div>

      <hr
        class={"mx-auto my-8 desktop:w-[1320px]  w-full h-[1px] bg-[#E0E0E0] "}
      />

      <div className="flex gap-3 min-[1050px]:gap-6 self-end">
        <button className=" w-[160px] min-[1050px]:w-[180px] bg-white rounded text-black font-medium py-[18px] border border-[#3E3E3E]">
          Cancel
        </button>
        <button className=" w-[160px] min-[1050px]:w-[180px] bg-[#03A89E] rounded text-black font-medium py-[18px]">
          Post
        </button>
      </div>
    </section>
  );
};

export default AdditionalInfo;
