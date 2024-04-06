import Button from "../button/index";
import SMSIcon from "../../assets/imgs/sms.svg";
import EmailIcon from "../../assets/imgs/email.svg";
import ArchiveIcon from "../../assets/imgs/archive.svg";

const ServiceTitle_Btns = (props) => {
    const { setchatModal, setemailModal } = props;

    const handleChatModal = () => {
        setchatModal(prev => !prev);
    }
    const handleEmailModal = () => {
        setemailModal(prev => !prev);
    }
    const handleMarkFollowModal = () => {

    }

    return (
        <div className="flex lg:flex-row flex-col py-5 lg:justify-between lg:items-center cursor-pointer border-b border-gray-200">
            <h3 className="text-base font-bold text-light-black lg:mb-0 mb-4 ">
               I can paint houses.
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
    );
};

export default ServiceTitle_Btns;
