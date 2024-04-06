import React from 'react'
import { IoMdClose } from "react-icons/io";

const EmailModalComponent = (props) => {
    const { setemailModal } = props;

    const handleEmailModal = () => {
        setemailModal(prev => !prev);
    }
  return (
      <div className='fixed w-screen bg-[rgba(0,0,0,0.7)] h-screen flex justify-center items-center top-0 overflow-hidden center'>
          <div className="wrapper bg-white w-[90%] md:w-[40%]  px-5 py-4 rounded-lg">
              
              {/* title */}
              <div className="title  border-b border-gray-200 flex justify-between items-center py-2">
                  <p className='text-[1.4rem] font-semibold'>Email</p>
                  <button onClick={handleEmailModal} className='text-[1.4rem] font-semibold'><IoMdClose /></button>
              </div>

              {/* fields */}
              <div className="fields-controller w-full flex flex-col gap-4 py-3">
                  <p> <span className='font-semibold'>To: </span> estherhoward@domain.com</p>
                  <form action="" className='flex flex-col gap-3'>
                      <div className="field flex flex-col gap-1">
                      <label htmlFor="subject">Subject</label>
                          <input type="text" className='py-1 px-2 rounded-sm border border-[#A9A9A9] ' name="" id="subject" />
                      </div>

                      <div className="field flex flex-col gap-1">
                      <label htmlFor="message">Message</label>
                          <textarea name="" className='rounded-sm p-2 border border-[#A9A9A9]' id="message" cols={30} rows={6}></textarea>
                      </div>
                  </form>
                  {/* btns */}
                  <div className="btns flex  flex-col gap-4 md:flex-row md:gap-3">
                      <button onClick={handleEmailModal} className='py-2 w-[100%] md:w-[50%] hover:bg-[#03A89E] flex justify-center items-center border border-gray-400 rounded-sm'>Cancel</button>
                      <button className='py-1 w-[100%] md:w-[50%] hover:bg-[#03A89E] flex justify-center items-center border border-gray-400 rounded-sm'>Send</button>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default EmailModalComponent;