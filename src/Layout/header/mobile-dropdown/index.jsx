import { useState } from "react";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="md:block lg:hidden">
      <button
        className="text-xl text-light-black hover:text-custom-green focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <>
              <path
                d="M3 4.5H21"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5303 9.5H21.0003"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 14.5H21"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5303 19.5H21.0003"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          )}
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white border rounded-md shadow-md flex flex-col justify-center items-center">
          <a
            href="/"
            className="text-[22px] no-underline block px-4 py-2 text-lg text-light-black hover:text-custom-green"
          >
            Home
          </a>
          <a
            href="/contact-us"
            className="text-[22px] no-underline block px-4 py-2 text-lg text-light-black hover:text-custom-green"
          >
            Contact Us
          </a>
          <a
            href="/register"
            className="text-[22px] no-underline block px-4 py-2 text-lg text-light-black hover:text-custom-green"
          >
            Register
          </a>
          <a
            href="/login"
            className="text-[22px] no-underline block px-4 py-2 text-lg text-light-black hover:text-custom-green"
          >
            Login
          </a>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
