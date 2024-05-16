import Button from "../../button/index";
import SMSIcon from "../../../assets/imgs/sms.svg";
import EmailIcon from "../../../assets/imgs/email.svg";
import ArchiveIcon from "../../../assets/imgs/archive.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaBookmark } from "react-icons/fa";
import { API_DOMAIN } from "../../../redux/api";
import { toast } from "react-toastify";
import { setPostFollowUp, setUserData } from "../../../redux/feature/reduxSlice";

const ResultsRow = (props) => {
  const { bidTitle, handleSMSBtn, handleEmailBtn, handleArchiveBtn, service_id, IsfollowUpList } = props;
  const user = useSelector((state) => state?.user?.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFollowUp = async (service_id) => {
    if (!user?.email) {
      navigate("/register");
      return;
    }
    
    if (user?.follow_up?.includes(service_id)) {
       try {
         const res = await API_DOMAIN.post(`/api/v1/user/${user?._id}/unfollow-up`, { postId: service_id })
         console.log("res.data.updateData: ", res?.data.updatedData);
         dispatch(setPostFollowUp(res?.data.updatedData))
        //  toast.success("marked Unfollow-up successfully")
       } catch (error) {
         console.log("something went wrong ", error);
         toast.error("Something went wrong!")
       }
    } else {

      try {
        const res = await API_DOMAIN.post(`/api/v1/user/${user?._id}/follow-up`, { postId: service_id })
        console.log("res.data.updatedData: ", res?.data.updatedData);
        dispatch(setPostFollowUp(res?.data.updatedData))

        // toast.success("marked follow-up successfully")
      } catch (error) {
        console.log("something went wrong ", error);
        toast.error("Something went wrong!")
      }
      
    }
  }


  return (
 <>
    {/* { IsfollowUpList && (user?.follow_up?.includes(service_id)) && (
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center cursor-pointer">
        <Link to={`/buy/${service_id}`} className="text-base flex items-center gap-3 font-normal text-light-black lg:mb-0 mb-4">
          {bidTitle}
          {
            user?.follow_up?.includes(service_id) && <span className="text-[1.2rem] text-yellow-400 font-bold"> < FaBookmark /></span>
          }

        </Link>
        <div className="flex justify-center items-center gap-3">
          <Link to={`/buy/${service_id}`}>
            <Button text={"Chat"} icon={SMSIcon} handleFunc={handleSMSBtn} />  </Link>
          <Link to={`/buy/${service_id}`}>
            <Button text={"Email"} icon={EmailIcon} handleFunc={handleEmailBtn} /> </Link>

          <button
            className="w-[100px] lg:w-[160px] h-11 flex justify-center items-center rounded-[4px] border border-[#A1ABB3] bg-white"
            onClick={() => handleFollowUp(service_id)}
          >
            <img src={ArchiveIcon} alt="Mark for Follow-Up" className="lg:mr-3 mr-0" />
            <span className="lg:block hidden font-normal text-[#A1ABB3] text-xs">
              Mark for Follow-Up
            </span>
          </button>


        </div>
      </div>
      )} */}

        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center cursor-pointer">
          <Link to={`/buy/${service_id}`} className="text-base flex items-center gap-3 font-normal text-light-black lg:mb-0 mb-4">
            {bidTitle}
            {
              user?.follow_up?.includes(service_id) && <span className="text-[1.2rem] text-yellow-400 font-bold"> < FaBookmark /></span>
            }

          </Link>
          <div className="flex justify-center items-center gap-3">
            <Link to={`/buy/${service_id}`}>
              <Button text={"Chat"} icon={SMSIcon} handleFunc={handleSMSBtn} />  </Link>
            <Link to={`/buy/${service_id}`}>
              <Button text={"Email"} icon={EmailIcon} handleFunc={handleEmailBtn} /> </Link>

            <button
              className="w-[100px] lg:w-[160px] h-11 flex justify-center items-center rounded-[4px] border border-[#A1ABB3] bg-white"
              onClick={() => handleFollowUp(service_id)}
            >
              <img src={ArchiveIcon} alt="Mark for Follow-Up" className="lg:mr-3 mr-0" />
              <span className="lg:block hidden font-normal text-[#A1ABB3] text-xs">
                Mark for Follow-Up
              </span>
            </button>


          </div>
        </div>
    

    </>
  );
};

export default ResultsRow;
