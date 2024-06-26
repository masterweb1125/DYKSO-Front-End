import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/imgs/logo.png";
import MobileMenu from "./mobile-dropdown/index";
import { LiaUserEditSolid } from "react-icons/lia";
import { LogOutUser } from "../../redux/feature/reduxSlice";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.user?.token);

  const LogOut = () => {
    dispatch(LogOutUser())
  }
  return (
    <div className="w-full h-[55px] px-[80px] flex justify-between items-center">
      <div className="flex items-center">
        <a href="/" className="cursor-pointer">
          <img src={logo} alt="logo" className="w-[150px] h-[40px]" />
        </a>
        <a
          href="/"
          className="text-[22px] no-underline text-light-black hover:text-custom-green ml-[50px] cursor-pointer hidden lg:block"
        >
          Home
        </a>
        <a
          href="/contact-us"
          className="text-[22px] no-underline text-light-black hover:text-custom-green ml-[50px] cursor-pointer hidden lg:block"
        >
          Contact Us
        </a>
      </div>
      <div className="hidden lg:flex">
        {token ? <>
          <button
            onClick={LogOut}
            className="text-[22px] no-underline text-light-black hover:text-custom-green ml-[50px] cursor-pointer"
          >
            Logout
          </button>
        </>
          : <>
            <a
              href="/register"
              className="text-[22px] no-underline text-light-black hover:text-custom-green ml-[50px] cursor-pointer"
            >
              Register
            </a>
            <a
              href="/login"
              className=" text-[22px] no-underline text-light-black hover:text-custom-green ml-[50px] cursor-pointer"
            >
              Login
            </a>
        </>}
        
      </div>
      <MobileMenu />
    </div>
  );
};

export default Header;
