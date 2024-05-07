import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_DOMAIN } from '../../redux/api';

const EmailModalComponent = (props) => {
    const { setemailModal, service } = props;
    const token = useSelector((state) => state?.user?.token);
    const user = useSelector((state) => state?.user?.userData);
    console.log("user email: ", user?.email)
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");
    const navigate = useNavigate();

    const handleEmailModal = () => {
        setemailModal(prev => !prev);
    }

    const sendEmailHandler = async() => {
        console.log("subject: " + subject);
        console.log("message: " + message);
        if (!token) {
            navigate("/register");
            return;
        }

        if (!subject || !message) {
            toast.error("Incomplete form to send email");
            return;
        }
        // const { sender, reciever, subject, body } = req.body;
        try {
            const res = await API_DOMAIN.post(`/api/v1/service/send-customer-email`, {
                sender: user?.email,
                reciever: service.posterEmail,
                subject: subject,
                body: message,
            });
            if (res.status === 200) {
                toast.success("Email sent successfully");
                handleEmailModal();
            }
            
        } catch (error) {
            console.log("sending customer email failed: ", error);
            toast.error("Email sending failed, try again");
        }
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
                  <p> <span className='font-semibold'>To: </span> {service?.posterEmail ? service?.posterEmail : "example@domain.com"}</p>
                  <form action="" className='flex flex-col gap-3'>
                      <div className="field flex flex-col gap-1">
                      <label htmlFor="subject">Subject</label>
                          <input type="text" onChange={(e)=> setsubject(e.target.value)} className='py-1 px-2 rounded-sm border border-[#A9A9A9]' name="" id="subject" />
                      </div>

                      <div className="field flex flex-col gap-1">
                      <label htmlFor="message">Message</label>
                          <textarea name="" onChange={(e)=>setmessage(e.target.value)} className='rounded-sm p-2 border border-[#A9A9A9]' id="message" cols={30} rows={6}></textarea>
                      </div>
                  </form>
                  {/* btns */}
                  <div className="btns flex  flex-col gap-4 md:flex-row md:gap-3">
                      <button onClick={handleEmailModal} className='py-2 w-[100%] md:w-[50%] hover:bg-[#03A89E] flex justify-center items-center border border-gray-400 rounded-sm'>Cancel</button>
                      <button onClick={sendEmailHandler} className='py-1 w-[100%] md:w-[50%] hover:bg-[#03A89E] flex justify-center items-center border border-gray-400 rounded-sm'>Send</button>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default EmailModalComponent;