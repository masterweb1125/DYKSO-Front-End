import Button from "../../button/index";
import SMSIcon from "../../../assets/imgs/sms.svg";
import EmailIcon from "../../../assets/imgs/email.svg";
import ArchiveIcon from "../../../assets/imgs/archive.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ResultsRow = (props) => {
  const { bidTitle, handleSMSBtn, handleEmailBtn, handleArchiveBtn, service_id } = props;
  return (
    <Link to={`/buy/${service_id}`}  className="flex lg:flex-row flex-col lg:justify-between lg:items-center cursor-pointer">
      <div className="text-base font-normal text-light-black lg:mb-0 mb-4">
        {bidTitle}
      </div>
      <div className="flex justify-center items-center gap-3">
        <Link to={`/buy/${service_id}`}>
          <Button text={"Chat"} icon={SMSIcon} handleFunc={handleSMSBtn} />  </Link>
        <Link to={`/buy/${service_id}`}>
          <Button text={"Email"} icon={EmailIcon} handleFunc={handleEmailBtn} /> </Link>
        <Button
          text={"Mark for Follow-Up"}
          icon={ArchiveIcon}
          handleFunc={handleArchiveBtn}
        />
      </div>
    </Link>
  );
};

export default ResultsRow;
