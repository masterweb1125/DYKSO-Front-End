import { useState } from "react";
import phoneIcon from "../../assets/imgs/phone-icon.svg";
import emailIcon from "../../assets/imgs/email-icon.svg";

const ContactUs = () => {
  const [contactInfo, setContactInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  return (
    <section className="w-full bg-[#F6F6F6] min-h-screen flex items-center justify-center">
      <div className="relative bg-[#F6F6F6] rounded-xl flex flex-col w-full max-w-[900px] mx-8 lg:mx-0 my-8 gap-[40px]">
        <div className="upper-row flex bg-[#F6F6F6] flex-col lg:flex-row justify-between max-w-[900px] w-full gap-[40px]">
          <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center rounded-[20px] pb-16 pt-14">
            <img src={phoneIcon} className="w-[56px] h-[56px]" alt="phone" />
            <h6 className=" text-[#323232] font-medium text-[22px]">
              Phone Number
            </h6>
            <p className="text-[#454545] text-[26px]">+1 234 456 7890</p>
          </div>
          <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center rounded-[20px] pb-16 pt-14">
            <img
              src={emailIcon}
              className="w-[56px] h-[56px]"
              alt="emailIcon"
            />
            <h6 className=" text-[#323232] font-medium text-[22px]">
              Email Address
            </h6>
            <p className="text-[#454545] text-[26px]">Contact@DYKSO.com</p>
          </div>
        </div>
        <div className="contact-us flex flex-col items-center justify-center px-10 lg:px-60px py-[50px] bg-white w-full max-w-[900px]">
          <h1 className="text-[#323232] text-[40px] font-bold ">Contact Us</h1>
          <p className="text-[#8E8E8E] text-[18px] mb-12">
            Get in touch with our team to learn more
          </p>

          <div className="inputs flex flex-wrap">
            <div className="flex flex-col lg:flex-row w-full lg:gap-[30px]">
              <div className="mb-4 w-full lg:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#454545]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={contactInfo.first_name || ""}
                  onChange={(e) => {
                    setContactInfo({
                      ...contactInfo,
                      first_name: e.target.value,
                    });
                  }}
                  className="mt-1 p-2 block w-full h-[47px] rounded-md bg-[#F8F8F8]"
                />
              </div>

              <div className="mb-4 w-full lg:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#454545]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={contactInfo.last_name || ""}
                  onChange={(e) => {
                    setContactInfo({
                      ...contactInfo,
                      last_name: e.target.value,
                    });
                  }}
                  className="mt-1 p-2 block w-full h-[47px] rounded-md bg-[#F8F8F8]"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full lg:gap-[30px]">
              <div className="mb-4 w-full lg:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#454545]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={contactInfo.email || ""}
                  onChange={(e) => {
                    setContactInfo({
                      ...contactInfo,
                      email: e.target.value,
                    });
                  }}
                  className="mt-1 p-2 block w-full h-[47px] rounded-md bg-[#F8F8F8]"
                />
              </div>

              <div className="mb-4 w-full lg:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#454545]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={contactInfo.phone || ""}
                  onChange={(e) => {
                    setContactInfo({
                      ...contactInfo,
                      phone: e.target.value,
                    });
                  }}
                  className="mt-1 p-2 block w-full h-[47px] rounded-md bg-[#F8F8F8]"
                />
              </div>
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#454545]"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={contactInfo.subject || ""}
                onChange={(e) => {
                  setContactInfo({
                    ...contactInfo,
                    subject: e.target.value,
                  });
                }}
                className="mt-1 p-2 block w-full h-[47px] rounded-md bg-[#F8F8F8]"
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#454545]"
              >
                Message
              </label>
              <input
                type="text"
                name="message"
                value={contactInfo.message || ""}
                onChange={(e) => {
                  setContactInfo({
                    ...contactInfo,
                    message: e.target.value,
                  });
                }}
                className="mt-1 p-2 block w-full h-[47px] rounded-md bg-[#F8F8F8]"
              />
            </div>

            <button className=" w-full bg-[#03A89E] rounded text-white font-medium py-[18px]">
              Send a Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
