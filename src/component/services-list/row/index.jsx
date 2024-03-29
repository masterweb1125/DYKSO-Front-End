import Button from "../../button/index";
import SMSIcon from "../../../assets/imgs/sms.svg";
import EmailIcon from "../../../assets/imgs/email.svg";
import ArchiveIcon from "../../../assets/imgs/archive.svg";

const ResultsRow = (props) => {
  const { bidTitle, handleSMSBtn, handleEmailBtn, handleArchiveBtn } = props;
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center cursor-pointer">
      <div className="text-base font-normal text-light-black lg:mb-0 mb-4">
        {bidTitle}
      </div>
      <div className="flex justify-center items-center gap-3">
        <Button text={"Chat"} icon={SMSIcon} handleFunc={handleSMSBtn} />
        <Button text={"Email"} icon={EmailIcon} handleFunc={handleEmailBtn} />
        <Button
          text={"Archive"}
          icon={ArchiveIcon}
          handleFunc={handleArchiveBtn}
        />
      </div>
    </div>
  );
};

export default ResultsRow;
