import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="w-full bg-[#F6F6F6] min-h-screen flex items-center justify-center p-14">
      <div className="bg-white flex flex-col w-full max-w-[1170px] mx-6 lg:mx-0 py-6 lg:py-14 px-5 lg:pl-24 lg:pr-[73px] rounded-[20px]">
        <h1 className="text-[40px] font-bold text-center pb-8 lg:pb-[86px]">Privacy Policy</h1>
        <p className="text-base lg:text-[22px] pb-6 lg:pb-[50px]">
          DYKSO ("we", "us", or "our") is committed to protecting the privacy of
          our users. This Privacy Policy outlines the types of personal
          information we collect, how we use it, and the measures we take to
          safeguard your information.
        </p>
        <h2 className="text-3xl font-bold pb-[38px]">Information We Collect</h2>
        <p className="text-base lg:text-[22px] pb-4 lg:pb-10">
          <span className="font-bold">Personal Information:</span> If you make a
          payment through our platform, we may collect payment information such
          as credit card details or other payment information.
        </p>

        <p className="text-base lg:text-[22px] pb-4 lg:pb-10">
          <span className="font-bold">Payment Information:</span> When you book
          a service, we may collect information about the type of service
          requested, service location, and any other details necessary to
          fulfill your request.
        </p>

        <p className="text-base lg:text-[22px] pb-4 lg:pb-10">
          <span className="font-bold">Usage Information:</span> We may collect
          information about your interactions with our platform, including log
          data, device information, and usage patterns.
        </p>

        <h2 className="text-3xl font-bold pb-4 lg:pb-10 pt-5">How We Use Your Information</h2>

        <p className="text-base lg:text-[22px] pb-4 lg:pb-10">
          <span className="font-bold">Provide Services:</span> We use the
          information we collect to provide and personalize the services you
          request, including scheduling appointments and communicating with
          service providers.
        </p>

        <p className="text-base lg:text-[22px] pb-4 lg:pb-10">
          <span className="font-bold">Improve Services:</span> We may use your
          information to analyze usage trends, improve our services, and develop
          new features.
        </p>

        <p className="text-base lg:text-[22px] pb-4 lg:pb-10">
          <span className="font-bold">Communications:</span> We may use your
          contact information to send you updates, service-related
          announcements, or promotional offers.
        </p>

        <h2 className="text-3xl font-bold pb-4 lg:pb-10 pt-5">Data Retention:</h2>
        <p className="text-base lg:text-[22px] pb-4 lg:pb-10">
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
