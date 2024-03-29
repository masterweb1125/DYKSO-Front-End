import { useState } from "react";
const Auth = () => {
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
  });
  const [signupCreds, setSignupCreds] = useState({
    name: "",
    email: "",
    confirm_email: "",
    password: "",
    confirm_password: "",
  });

  const handleLogin = () => {
    // login logic here
  };

  const handleSignup = () => {
    // signup logic here
  };

  return (
    <section className="w-full bg-[#F6F6F6] min-h-screen flex items-center justify-center">
      <div className="relative bg-white rounded-xl flex flex-col lg:flex-row w-full max-w-[968px] mx-8 lg:mx-0 my-4">
        <div className="absolute hidden lg:block border-l border-[#C7C7C7] h-[680px] mt-[70px] left-1/2 transform -translate-x-1/2"></div>
        <div className="px-5 lg:px-16 pt-[77px] pb-[72px] w-full lg:w-1/2 lg:order-3">
          <h2 className="text-[28px] color-[#323232] font-bold pb-2">Login</h2>
          <p className="text-sm color-[#030303] mb-6">
            Already have an account? Welcome back!
          </p>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[#454545]"
            >
              Email Id
            </label>
            <input
              type="email"
              name="email"
              value={loginCreds.email || ""}
              onChange={(e) => {
                setLoginCreds({ ...loginCreds, email: e.target.value });
              }}
              className="mt-1 p-2 block w-full h-[47px] rounded-md border border-[#D2D2D2]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[#454545]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={loginCreds.password || ""}
              onChange={(e) => {
                setLoginCreds({ ...loginCreds, password: e.target.value });
              }}
              className="mt-1 p-2 block w-full h-[47px] rounded-md border border-[#D2D2D2]"
            />
          </div>

          <a href="" className="no-underline">
            <p className="text-right text-[#8D8D8D] mb-4">Forgot Password ?</p>
          </a>

          <button
            className=" w-full bg-[#03A89E] rounded text-white font-medium py-[18px]"
            onClick={handleLogin}
          >
            LogIn
          </button>
        </div>
        <hr className=" lg:hidden mx-5 border-t border-[#E0E0E0]" />
        <div className="px-5 lg:px-16 pt-[77px] pb-[72px] w-full lg:w-1/2 lg:order-1">
          <h2 className="text-[28px] color-[#323232] font-bold pb-2">
            Create Account
          </h2>
          <p className="text-sm color-[#030303] mb-6">
            Register using your name and email
          </p>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#454545]"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={signupCreds.name || ""}
              onChange={(e) => {
                setSignupCreds({ ...loginCreds, name: e.target.value });
              }}
              className="mt-1 p-2 block w-full h-[47px] rounded-md border border-[#D2D2D2]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#454545]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={signupCreds.email || ""}
              onChange={(e) => {
                setSignupCreds({ ...loginCreds, email: e.target.value });
              }}
              className="mt-1 p-2 block w-full h-[47px] rounded-md border border-[#D2D2D2]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmEmail"
              className="block text-sm font-medium text-[#454545]"
            >
              Confirm Email
            </label>
            <input
              type="email"
              name="confirmEmail"
              value={signupCreds.confirm_email || ""}
              onChange={(e) => {
                setSignupCreds({
                  ...loginCreds,
                  confirm_email: e.target.value,
                });
              }}
              className="mt-1 p-2 block w-full h-[47px] rounded-md border border-[#D2D2D2]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#454545]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={signupCreds.password || ""}
              onChange={(e) => {
                setSignupCreds({ ...loginCreds, password: e.target.value });
              }}
              className="mt-1 p-2 block w-full h-[47px] rounded-md border border-[#D2D2D2]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[#454545]"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={signupCreds.confirm_password || ""}
              onChange={(e) => {
                setSignupCreds({
                  ...loginCreds,
                  confirm_password: e.target.value,
                });
              }}
              className="mt-1 p-2 block w-full h-[47px] rounded-md border border-[#D2D2D2]"
            />
          </div>

          <p className="text-[#8D8D8D] mb-4">
            By continuing, you have read and agree to the Terms & Conditions
          </p>

          <button
            className=" w-full bg-[#03A89E] rounded text-white font-medium py-[18px]"
            onClick={handleSignup}
          >
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Auth;
