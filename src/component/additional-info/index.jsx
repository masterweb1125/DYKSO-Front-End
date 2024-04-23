import React, { useEffect, useRef, useState } from "react";
import uploadIcon from "../../assets/imgs/upload-icon.svg";
import pdfIcon from "../../assets/imgs/pdf-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { API_DOMAIN } from "../../redux/api";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";
import { AddServiceData } from "../../redux/feature/reduxSlice";

const AdditionalInfo = (props) => {
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [laoding, setlaoding] = useState(false);
  const [serviceTitle, setserviceTitle] = useState("");
  const navigate = useNavigate();
  const { zipCode } = props;
  const { token, userData } = useSelector((state) => state?.user);
  const captureFile = useSelector((state) => state?.generalData?.captureData);
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  

  useEffect(() => {
    if (captureFile) {
       setUploadedFile(captureFile);
    }
  }, [])
  

  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  // uploading file to cloudinary
  const uploadingFileCloudinary = async() => {
    try {
      if (uploadedFile != null) {
        const data = new FormData();
        data.append("file", uploadedFile);
        data.append("upload_preset", "uploads");
        data.append("cloud_name", "bangash-cloud");

        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/bangash-cloud/image/upload",
          data
        );
        var { url } = uploadRes.data;
        return url;
      }
      
    } catch (error) {
      console.log("an error occured while uploading file to the cloudinary: ", error);
      toast.error("An error occured while uploading file to the cloud")
      return null;
    }
  }


  const PostHandler = async() => {
    
    if (!additionalInfo || !uploadedFile || !serviceTitle) {
      toast.error("Incomplete post detail")
      return;
    }

    try {
      setlaoding(true);
    // Upload file to Cloudinary and get the URL
    const cloudinaryURL = await uploadingFileCloudinary();

      if (cloudinaryURL) {
      const serviceData = {
      userId: userData?._id,
      posterName: userData?.name,
      posterEmail: userData?.email,
      serviceTitle: serviceTitle,
      zipCode: zipCode,
      service_info: additionalInfo,
      attachment: cloudinaryURL
    }
    
        if (!token) {
          dispatch(AddServiceData(serviceData))
          navigate("/register");
          return;
        }
        
        console.log("after navigation to register page: ")
      // Call the API to post service data
      const res = await API_DOMAIN.post(`/api/v1/service`, serviceData);
      if (res.status === 200) {
        toast.success("service posted successfully")
        setAdditionalInfo("");
        setserviceTitle("");
        setUploadedFile(null);
      }
      }
      setlaoding(false);
    } catch (error) {
      console.log("something went wrong while saving service data: ", error);
      setlaoding(false);
      toast.error("Something went wrong")

    }
  };

  return (
    <section className="bg-white rounded-2xl md:rounded flex flex-col w-full max-w-[80%] mx-8 lg:mx-0 my-4 px-6 py-8 mb-20 ">
     
      <h2 className="text-xl mb-4">Service Title</h2>
      <input type="text"
        className="w-full mb-8 py-3 px-5 rounded border border-[#9B9B9B]"
        value={serviceTitle}
        placeholder="Enter service title"
        onChange={(e) => {
          setserviceTitle(e.target.value);
        }}
      />

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

      <div
        className="flex items-center justify-center gap-3 mb-7 max-w-[475px] py-8 bg-[#EBF8F7] border border-dashed border-[#03A89E] rounded cursor-pointer"
        onClick={() => fileInputRef.current.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <img src={uploadIcon} alt="uploadIcon" />
        <p className="text-lg ">Drag & Drop or Browse</p>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

      {uploadedFile && (
        <div className="flex items-center justify-between gap-3 max-w-[475px] py-3 px-5 bg-[#FBFBFB] border border-[#03A89E] rounded">
          <div className="flex gap-4 items-center">
            <img src={pdfIcon} alt="pdfIcon" />
            <p className="text-xl">{uploadedFile.name}</p>
          </div>
          <p className="text-xl">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
        </div>
      )}

      <hr
        className={"mx-auto my-8 desktop:w-[1320px]  w-full h-[1px] bg-[#E0E0E0] "}
      />

      <div className="flex gap-3 min-[1050px]:gap-6 self-end">
        <button className=" w-[160px] min-[1050px]:w-[180px] bg-white rounded text-black font-medium py-[18px] border border-[#3E3E3E]">
          Cancel
        </button>
        <button onClick={PostHandler} className=" relative w-[160px] min-[1050px]:w-[180px] bg-[#03A89E] rounded text-black font-medium py-[18px]">
          {!laoding ? "Post" : (
            <div className=" absolute bottom-4 left-20 loading animate-spin text-[1.5rem] text-white"><AiOutlineLoading3Quarters /></div>
          )}
       
        </button>
      </div>
    </section>
  );
};

export default AdditionalInfo;
