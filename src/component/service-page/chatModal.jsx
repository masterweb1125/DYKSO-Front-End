import React from 'react'
import { IoMdClose } from "react-icons/io";
import profile_pic from "../../assets/imgs/profile-pic.png";
import profile_avatar from "../../assets/imgs/profile-avatar.jpg";

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ChatModalComponent = (props) => {
    const { setchatModal, service } = props;
    const token = useSelector((state) => state?.user?.token);
    const navigate = useNavigate();
    
    const handleChatModal = () => {
        setchatModal(prev => !prev);
    }

    const sendMessageHandler = () => {
        if (!token) {
            navigate("/register");
            return;
        }
    }

    
    return (
        <div className='fixed w-screen bg-[rgba(0,0,0,0.7)] h-screen flex justify-center items-center top-0 overflow-hidden center'>
            <div className="wrapper bg-white w-[90%] md:w-[40%]  px-5 py-4 rounded-lg">

                {/* title */}
                <div className="title  border-b border-gray-200 flex justify-between items-center py-2">
                    <p className='text-[1.4rem] font-semibold'>Chat</p>
                    <button onClick={handleChatModal} className='text-[1.4rem] font-semibold'><IoMdClose /></button>
                </div>

                {/* fields */}
                <div className="fields-controller w-full flex flex-col gap-4 py-3">

                    {/* img + title */}
                    <div className="img-title flex gap-5 items-center py-4 ">
                        <img src={service?.profileImage ? service?.profileImage : profile_avatar} className='w-[40px] h-[40px]' alt='paint-house-pic' />
                        <h2 className='text-[1.3rem] font-normal tracking-0 md:tracking-wide'>{service?.posterName ? service?.posterName : "Esther Howard"}</h2>
                    </div>

                    <form action="" className='flex flex-col gap-3'>
                        <div className="field flex flex-col gap-1">
                            <label htmlFor="message">Message</label>
                            <textarea name="" placeholder='Type your message here' className='placeholder:text-[#8C8C8C] p-2 rounded-sm border border-[#A9A9A9]' id="message" cols={30} rows={6}></textarea>
                        </div>
                    </form>
                    {/* btns */}
                    <div className="btns flex  flex-col gap-4 md:flex-row md:gap-3">
                        <button onClick={handleChatModal} className='py-2 w-[100%] md:w-[50%] hover:bg-[#03A89E] flex justify-center items-center border border-gray-400 rounded-sm'>Cancel</button>
                        
                        <button onClick={sendMessageHandler} className='py-2 w-[100%] md:w-[50%] hover:bg-[#03A89E] flex justify-center items-center border border-gray-400 rounded-sm'>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChatModalComponent;