import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../../../assets";
import { IoClose } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import Scrollbar from "../../Dashboard/atoms/scrollbar";

const NavigationBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const shadow = useRef();

  return (
    <>
      <nav
        className={` w-full z-50 flex items-center px-3 lgpx-16 py-3 lg:py-5 lg:px-5 fixed top-0 bg-primary backdrop-blur-md`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto gap-3">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scroll(0, 0);
            }}
          >
            <img
              src={logo}
              alt="Leonat Krasniqi Logo"
              className=" w-10 h-10 lg:w-12 lg:h-12 object-contain"
            />
            <p className="text-white text-[14px] lg:text-[18px] font-bold cursor-pointer">
               <span className="lg:block">Full Stack Developer</span>
            </p>
          </Link>

          <div
            ref={shadow}
            className={`${
              !toggle ? "hidden lg:flex" : "flex"
            }  absolute top-[60px] bg-custom-gradient  p-6 lg:p-0 right-0 left-0 min-w[140px] h-screen z-10 lg:h-min lg:flex lg:static lg:mx-4 lg:my-2 lg:top-20 lg:bg-none`}
          >
            <ul className=" w-full h-fit list-none flex items-start flex-col gap-4  lg:flex-row lg:justify-end">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  className={`${
                    active === link.title
                      ? " text-white"
                      : " text-costume lg:text-secondary"
                  }  hover:text-white text-[18px] font-medium cursor-pointer`}
                >
                  <a
                    href={link.type === "page" ? `${link.id}` : `/#${link.id}`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
        
            </ul>
          </div>

          <div className="lg:hidden flex flex-1 justify-end items-center flex-none">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className={`w-[20px] h-[20px] object-contain cursor-pointer ${
                toggle && " w-[16px] h-[16px]"
              }`}
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
      </nav>
      <Scrollbar />
    </>
  );
};

export default NavigationBar;
