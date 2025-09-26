import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../../../assets";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

import { useNavigate } from "react-router-dom";
import Scrollbar from "../atoms/scrollbar";

const NavigationBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const shadow = useRef();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full z-50 flex items-center px-3 lgpx-16 py-3 lg:py-5 lg:px-5 fixed top-0 bg-primary/80 backdrop-blur-md border-b border-[#915eff]/20`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                window.scroll(0, 0);
              }}
            >
              <motion.img
                src={logo}
                alt="Leonat Krasniqi Logo"
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <p className="text-white text-[14px] lg:text-[18px] font-bold cursor-pointer">
                 <span className="lg:block">Full Stack Developer</span>
              </p>
            </Link>
          </motion.div>

          <motion.div
            ref={shadow}
            initial={false}
            animate={{
              opacity: isDesktop ? 1 : (toggle ? 1 : 0),
              scale: isDesktop ? 1 : (toggle ? 1 : 0.95),
              y: isDesktop ? 0 : (toggle ? 0 : -20)
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`${
              !toggle ? "hidden lg:flex" : "flex"
            } absolute top-[60px] bg-gradient-to-br from-primary to-tertiary backdrop-blur-xl p-6 lg:p-0 right-0 left-0 min-w[140px] h-screen z-10 lg:h-min lg:flex lg:static lg:mx-4 lg:my-2 lg:top-20 lg:bg-none border-t border-[#915eff]/20 lg:border-none shadow-2xl lg:shadow-none`}
          >
              <ul className="w-full h-fit list-none flex items-start flex-col gap-4 lg:flex-row lg:justify-end">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                    className="relative group"
                  >
                    <motion.a
                      href={link.type === "page" ? `${link.id}` : `/#${link.id}`}
                      className={`${
                        active === link.title
                          ? "text-white"
                          : "text-white lg:text-white"
                      } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300 relative z-10 px-3 py-2 rounded-lg hover:bg-[#915eff]/10`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.title}
                      {active === link.title && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-[#915eff]/20 to-[#6366f1]/20 rounded-lg -z-10"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
          </motion.div>

          <div className="lg:hidden flex justify-end items-center">
            <motion.button
              className="p-2 rounded-lg hover:bg-[#915eff]/10 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setToggle(!toggle)}
            >
              <motion.img
                src={toggle ? close : menu}
                alt="menu"
                className={`w-[20px] h-[20px] object-contain cursor-pointer ${
                  toggle && " w-[16px] h-[16px]"
                }`}
                animate={{ rotate: toggle ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>
      <Scrollbar />
    </>
  );
};

export default NavigationBar;
