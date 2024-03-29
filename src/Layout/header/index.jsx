import logo from "../../assets/logo.png";
import MobileMenu from "./mobile-dropdown/index";

const Header = () => {
  return (
    <div className="w-full h-[100px] px-[80px] flex justify-between items-center">
      <div className="flex items-center">
        <a href="/" className="cursor-pointer">
          <img src={logo} alt="logo" className="w-[155px] h-[42px]" />
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
      </div>
      <MobileMenu />
    </div>
  );
};

export default Header;
