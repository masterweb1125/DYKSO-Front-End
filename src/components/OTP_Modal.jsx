import React, { useState } from 'react'
import { LuLoader2 } from 'react-icons/lu'
import Testotp from './checkingOtp';
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreatingUser } from '../redux/api';

const OTPModal = ({ setOTPDialoug, generatedOTP, userData }) => {
    const [otp, setOtp] = useState("");
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const generalData = useSelector((state) => state?.generalData?.serviceData);

    // otp modal close
    const CloseOTPModel = () => {
        setOTPDialoug((prev)=> !prev)
    }

    const CompareOTP = async () => {
        setloading(true);
        if (generatedOTP === otp) {
            
            try {
                const res = await CreatingUser(dispatch, userData)
                if (res === 200) {
                    toast.success("registration done successfully");
                    setOTPDialoug((prev) => !prev)
                    if (generalData?.serviceTitle) {
                        navigate("/sell")
                    } else {
                        navigate("/");
                    }
                }
                setloading(false);
            } catch (error) {
                toast.error("Something went wrong")
                setloading(false);

            }


        } else {
            toast.error("Incorrect OTP!")
            setloading(false);

        }
    }

  return (
      <div className='fixed w-screen bg-[rgba(0,0,0,0.7)] h-screen flex justify-center items-center top-0 overflow-hidden center'>
          
          <div className="wrapper relative p-8 flex flex-col justify-center items-center gap-6  w-[34rem] max-sm:w-[22rem] bg-white rounded-md">
              
              {/* close button */}
              <button onClick={CloseOTPModel} className='absolute top-0 right-0 text-[2rem] bg-[#467DCE] hover:bg-blue-700 p-2 text-white'> <IoClose/></button>
              {/* Confirm Your Email content */}
            
              <div className="wrapper flex flex-col justify-center items-center gap-2">
                  <h3 className="text-black text-[1.7rem] max-sm:text-[1rem] font-semibold">
                      OTP Verification
                  </h3>
              <p className="text-[1rem] text-black  ">
                      Enter the OTP you received at  <span className="text-[1rem] text-black font-bold ">
                          {userData?.email}
                      </span>
              </p>
             
              </div>
              <div>
                  <Testotp otp={otp} setOtp={setOtp} />
              </div>
              <button
                  className="h-[3rem] w-[8.875rem] max-sm:w-[8rem] max-sm:h-[3rem] flex items-center justify-center rounded-[0.9375rem] bg-[#467DCE] hover:bg-blue-600"
                  style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.07)" }}
                  onClick={CompareOTP}
              >
                  {loading ? (
                      <span className="animate-spin text-[1.5rem] text-white">
                          <LuLoader2 />
                      </span>
                  ) : (
                      <span className="text-white text-[1rem] font-bold tracking-[0.16rem]">
                          VERFIY
                      </span>
                  )}
              </button>
          </div>
    </div>
  )
}

export default OTPModal