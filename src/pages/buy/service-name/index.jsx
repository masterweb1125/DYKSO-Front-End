/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import ServiceTitle_Btns from '../../../component/service-page/ServiceTitle_Btns';
import ServiceInfo from '../../../component/service-page/serviceInfo';
import ChatModalComponent from '../../../component/service-page/emailModal';
import EmailModalComponent from '../../../component/service-page/emailModal';

const ServiceName = () => {
  const [chatModal, setchatModal] = useState(false);
  const [emailModal, setemailModal] = useState(false);
  return (
    <>
      <div className="bg-white rounded-2xl md:rounded flex flex-col justify-center items-between w-full max-w-[80%] h-[auto] mx-8 min-[1050px]:mx-0 my-4 px-6 py-8 mb-20">
          
      <ServiceTitle_Btns setchatModal={setchatModal} setemailModal={setemailModal} />
          <ServiceInfo/>
    </div>
    
      {emailModal && <EmailModalComponent setemailModal={setemailModal} />}
    </>
  )
}

export default ServiceName;