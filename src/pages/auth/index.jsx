/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { CreatingUser, Login } from "../../redux/api";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUp_validate } from "../../model/signUpSchema";
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import OTP_Modal from "../../components/OTP_Modal";
import OTPModal from "../../components/OTP_Modal";
import { GenerateOTP } from "../../utils/generateRandomOtp";


const Auth = () => {
  const dispatch = useDispatch();
  const [OTPDialoug, setOTPDialoug] = useState(false);
  const [otp, setotp] = useState("");

  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm  ({
    resolver: yupResolver(SignUp_validate),
  });



  const handleLogin = async(e) => {
    e.preventDefault();
    if (loginCreds.email && loginCreds.password) {
      try {
        const res = await Login(dispatch, loginCreds)
        if (res === 200) {
          toast.success("Login successfully")
          navigate("/");
        } else if (res?.status === 400) {
          toast.error("Incorrect login credentials")
        }
      } catch (error) {
        toast.error("Something went wrong")
        console.log("login error: " + error);
        
      }

    }
  }

  const handleSignup = async (data) => {
    const { Name, email, password } = data;

    const userInfo = {
      name: Name,
      email: email,
      password: password
    }
    const newOtp = GenerateOTP();
console.log("new otp: ", newOtp)

    setOTPDialoug(true);
  //  try {
  //    const res = await CreatingUser(dispatch, userInfo)
  //    if (res === 200) {
  //      toast.success("registration done successfully");
  //      navigate("/");
  //   }
  //  } catch (error) {
  //    toast.error("Something went wrong")

  //  }

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

          <form action="" >
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
                required
                placeholder="Email Address"
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
                required
                placeholder="password"
              value={loginCreds.password || ""}
              onChange={(e) => {
                setLoginCreds({ ...loginCreds, password: e.target.value });
              }}
              className="mt-1 p-2 block w-full h-[47px] rounded-md border border-[#D2D2D2]"
            />
          </div>

          <a href="#" className="no-underline">
            <p className="text-right text-[#8D8D8D] mb-4">Forgot Password ?</p>
          </a>

          <button
            className=" w-full bg-[#03A89E] rounded text-white font-medium py-[18px]"
            onClick={handleLogin}
          >
            LogIn
            </button>
          </form>
        </div>
        <hr className=" lg:hidden mx-5 border-t border-[#E0E0E0]" />

        <div className="px-5 lg:px-16 pt-[77px] pb-[72px] w-full lg:w-1/2 lg:order-1">
          <h2 className="text-[28px] color-[#323232] font-bold pb-2">
            Create Account
          </h2>
          <p className="text-sm color-[#030303] mb-6">
            Register using your name and email
          </p>

          <form onSubmit={handleSubmit(handleSignup)}>
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
              placeholder=" your fullname"
                {...register("Name")}
              
                className={`mt-1 p-2 block w-full h-[47px] rounded-md border  ${errors.Name ? "border-red-500" : "border-[#D2D2D2]"}`}
              />
              <div className="text-sm text-red-500">
                {errors.Name?.message}
              </div>
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
                placeholder="Email Address"

                {...register("email")}
                className={`mt-1 p-2 block w-full h-[47px] rounded-md border  ${errors.email ? "border-red-500" : "border-[#D2D2D2]"}`}
              />
              
              <div className="text-sm text-red-500">
                {errors.email?.message}
              </div>
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
                placeholder="Confirm email Address"

                {...register("confirmEmail")}
                className={`mt-1 p-2 block w-full h-[47px] rounded-md border  ${errors.confirmEmail ? "border-red-500" : "border-[#D2D2D2]"}`}
              />
              
              <div className="text-sm text-red-500">
                {errors.confirmEmail?.message}
              </div>
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
                placeholder=" password"

                {...register("password")}
                className={`mt-1 p-2 block w-full h-[47px] rounded-md border   ${errors.Name ? "border-red-500" : "border-[#D2D2D2]"}`}
              />
              
              <div className="text-sm text-red-500">
                {errors.password?.message}
              </div>
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
                placeholder="confirm password"

                {...register("confirmPassword")}
                className={`mt-1 p-2 block w-full h-[47px] rounded-md border   ${errors.Name ? "border-red-500" : "border-[#D2D2D2]"}`}
              />
              
              <div className="text-sm text-red-500">
                {errors.confirmPassword?.message}
              </div>
          </div>

          <p className="text-[#8D8D8D] mb-4">
            By continuing, you have read and agree to the Terms & Conditions
          </p>

            <button
              type="submit"
            className=" w-full bg-[#03A89E] rounded text-white font-medium py-[18px]"
          >
            Create Account
            </button>
          </form>
        </div>
      </div>
      {OTPDialoug && <OTPModal setOTPDialoug={setOTPDialoug } />}
    </section>

  );
};

export default Auth;
