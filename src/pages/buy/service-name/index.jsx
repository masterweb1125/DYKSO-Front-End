/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react'
import ServiceTitle_Btns from '../../../component/service-page/ServiceTitle_Btns';
import ServiceInfo from '../../../component/service-page/serviceInfo';
import EmailModalComponent from '../../../component/service-page/emailModal';
import ChatModalComponent from '../../../component/service-page/chatModal';
import { useParams } from 'react-router-dom';
import { API_DOMAIN } from '../../../redux/api';

const ServiceName = () => {
  const [chatModal, setchatModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [service, setservice] = useState();
  const [loading, setloading] = useState(false);
  const {id} = useParams();

  const FetchingServiceData = async (zip_code) => {
    try {
      setloading(true);
      const res = await API_DOMAIN.get(`/api/v1/service/${id}`);
      if (res.status === 200) {
        setservice(res?.data?.data)
      }
      setloading(false);
    } catch (error) {
      console.log("something went wrong while fetching service data: ", error);
      setloading(false);
    }
  }

  useEffect(() => {
    FetchingServiceData();  
  }, [])
  
  return (
    <>
      <div className="bg-white rounded-2xl md:rounded flex flex-col justify-center items-between w-full max-w-[80%] h-[auto] mx-8 min-[1050px]:mx-0 my-4 px-6 py-8 mb-20">
          
        <ServiceTitle_Btns setchatModal={setchatModal} setemailModal={setEmailModal} service={service} />
        <ServiceInfo service={service} />
    </div>
    
      {emailModal && <EmailModalComponent setemailModal={setEmailModal} service={service} />}
      {chatModal && <ChatModalComponent setchatModal={setchatModal} service={service} />}
    </>
  )
}

export default ServiceName;