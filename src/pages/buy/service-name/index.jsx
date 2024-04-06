/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import ServiceTitle_Btns from '../../../component/service-page/ServiceTitle_Btns';
import ServiceInfo from '../../../component/service-page/serviceInfo';
import EmailModalComponent from '../../../component/service-page/emailModal';
import ChatModalComponent from '../../../component/service-page/chatModal';

const ServiceName = () => {
  const [chatModal, setchatModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  return (
    <>
      <div className="bg-white rounded-2xl md:rounded flex flex-col justify-center items-between w-full max-w-[80%] h-[auto] mx-8 min-[1050px]:mx-0 my-4 px-6 py-8 mb-20">
          
      <ServiceTitle_Btns setchatModal={setchatModal} setemailModal={setEmailModal} />
          <ServiceInfo/>
    </div>
    
      {emailModal && <EmailModalComponent setemailModal={setEmailModal} />}
      {chatModal && <ChatModalComponent setchatModal={setchatModal} />}
    </>
  )
}

export default ServiceName;