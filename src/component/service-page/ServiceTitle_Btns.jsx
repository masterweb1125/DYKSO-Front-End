import Button from "../button/index";
import SMSIcon from "../../assets/imgs/sms.svg";
import EmailIcon from "../../assets/imgs/email.svg";
import ArchiveIcon from "../../assets/imgs/archive.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MarkFollowUp } from "../../redux/feature/generalSlice";
import { useEffect, useState } from "react";
import { API_DOMAIN } from "../../redux/api";
import { toast } from "react-toastify";
import { setPostFollowUp } from "../../redux/feature/reduxSlice";
import { IoClose } from "react-icons/io5";

const ServiceTitle_Btns = (props) => {
    const { setchatModal, setemailModal, service } = props;
    const user = useSelector((state) => state?.user?.userData);
    const followUp = useSelector((state) => state?.generalData?.markFollowUp);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [successModal, setsuccessModal] = useState(false);

    const handleChatModal = () => {
        setchatModal(prev => !prev);
    }
    const handleEmailModal = () => {
        setemailModal(prev => !prev);
    }
    const handleMarkFollowModal = async() => {

        if (!user?._id) {
            dispatch(MarkFollowUp("true"))
            navigate("/register")
            return;
     }
        if (user?.follow_up?.includes(service?._id)) {
            try {
                const res = await API_DOMAIN.post(`/api/v1/user/${user?._id}/unfollow-up`, { postId: service?._id })
                console.log("res.data.updateData: ", res?.data.updatedData);
                dispatch(setPostFollowUp(res?.data.updatedData))
                toast.success("marked unfollow-up successfully")

                dispatch(MarkFollowUp("false"))
            } catch (error) {
                console.log("something went wrong ", error);
                toast.error("Something went wrong!")
                dispatch(MarkFollowUp("false"))

            }
        } else {

            try {
                const res = await API_DOMAIN.post(`/api/v1/user/${user?._id}/follow-up`, { postId: service?._id })
                console.log("res.data.updatedData: ", res?.data.updatedData);
                dispatch(setPostFollowUp(res?.data.updatedData))
                dispatch(MarkFollowUp("false"))
                setsuccessModal(true);

            } catch (error) {
                console.log("something went wrong ", error);
                toast.error("Something went wrong!")
                dispatch(MarkFollowUp("false"))

            }

        }
        
        
    }

    const MarkPostFollowUp = async () => {
        if (followUp === "true") {
            console.log("Inside MarkedPostFollowup func")
            if (user?.follow_up?.includes(service?._id)) {
                try {
                    const res = await API_DOMAIN.post(`/api/v1/user/${user?._id}/unfollow-up`, { postId: service?._id })
                    console.log("res.data.updateData: ", res?.data.updatedData);
                    dispatch(setPostFollowUp(res?.data.updatedData))
                    toast.success("marked post unfollow-up successfully")
                    dispatch(MarkFollowUp("false"))

                } catch (error) {
                    console.log("something went wrong ", error);
                    toast.error("Something went wrong!")
                    dispatch(MarkFollowUp("false"))

                }
            } else {

                try {
                    const res = await API_DOMAIN.post(`/api/v1/user/${user?._id}/follow-up`, { postId: service?._id })
                    console.log("res.data.updatedData: ", res?.data.updatedData);
                    dispatch(setPostFollowUp(res?.data.updatedData))
                    dispatch(MarkFollowUp("false"))
                    setsuccessModal(true);

                } catch (error) {
                    console.log("something went wrong ", error);
                    toast.error("Something went wrong!")
                    dispatch(MarkFollowUp("false"))

                }

            }
     }
 }


    useEffect(() => {
        console.log("called useEffect")  
        MarkPostFollowUp();
    }, [user])
    

    return (
        <>
        <div className="flex lg:flex-row flex-col py-5 lg:justify-between lg:items-center cursor-pointer border-b border-gray-200">
            <h3 className="text-base font-bold text-light-black lg:mb-0 mb-4 ">
                {service?.serviceTitle ? service.serviceTitle : ""}
            </h3>
            <div className="flex justify-center items-center gap-3">
                    <Button text={"Chat"} icon={SMSIcon} handleFunc={handleChatModal} /> 
                
                    <Button text={"Email"} icon={EmailIcon} handleFunc={handleEmailModal} /> 
                <Button
                    text={"Mark for Follow-Up"}
                    icon={ArchiveIcon}
                    handleFunc={handleMarkFollowModal}
                />
            </div>
            </div>
            
            {/* ---------- success modal ----------- */}
            
            {successModal && (
                <div className='fixed z-50 ml-[-2rem] w-screen bg-[rgba(0,0,0,0.7)] h-screen flex justify-center items-center top-0 overflow-hidden center'>

                    <div className="wrapper relative px-8 py-16 flex flex-col justify-center items-center gap-6  w-[34rem] max-sm:w-[22rem] bg-white rounded-lg">

                        {/* close button */}
                        <button onClick={() => setsuccessModal((prev) => !prev)} className='absolute top-2 right-2 text-[2rem]  p-2 text-black'> <IoClose /></button>
                        {/* Confirm Your Email content */}

                        <div className="wrapper flex flex-col justify-center items-center gap-2">
                            <h3 className="text-black text-[2.5rem] max-sm:text-[1rem] font-bold">
                                Success!
                            </h3>
                            <p className="text-[1.5rem] text-black  ">
                                Successfully marked for follow-up
                                    
                               
                            </p>

                        </div>
                        <div>
                        </div>
                        <Link to="/"
                            className="h-[4rem] w-[80%] text-[1.4rem] font-semibold   flex items-center justify-center rounded-md bg-yellow-500 hover:bg-yellow-600"
                            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.07)" }}
                        >
                            Go to Homepage
                            
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServiceTitle_Btns;
