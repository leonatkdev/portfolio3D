import { motion } from "framer-motion";

import { styles } from "../../../style";
import leoAvatar from "../../../assets/leoavatar.png";
import { ComputersCanvas } from "../../canvas";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { RxLinkedinLogo } from "react-icons/rx";

const Hero = () => {
  return (
    <section
      className={`sm:px-16 px-3 pt-4  flex flex-col lg:flex-row-reverse sm:justify-center items-center gap-6 lg:gap-14 sm relative  mx-auto mt-[64px] h-[calc(100vh-64px)]
    `}
    >
      <div
        className={`inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#6366f1]" />
          <div className="w-1 lg:h-80 h-40 bg-gradient-to-b from-indigo-500" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {`Hi, I'm `}
            <span className="text-[#915eff]">Leonat</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Web Applications <br className="sm:block hidden" />
            and Mobile Apps
          </p>
          <ul className="mt-4 flex gap-4">
            <li>
              <a
                href="https://www.linkedin.com/in/leonat-krasniqi-6b59a0223/"
                target="_blank"
                rel="noreferrer"
                className="text-[#915eff]"
              >
                <RxLinkedinLogo width={32} height={32} className="w-8 h-8" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/leonatkdev"
                target="_blank"
                rel="noreferrer"
                className="text-[#915eff]"
              >
                <FaGithub width={32} height={32} className="w-8 h-8" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/leonatk_1/"
                target="_blank"
                rel="noreferrer"
                className="text-[#915eff]"
              >
                <FaInstagram width={32} height={32} className="w-8 h-8" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative">
        <img
          src={leoAvatar}
          alt="hero"
          loading="eager"
          className="relative w-[420px] sm:h-[420px] object-cover z-10 rounded-b-[50%]  hover:pb-6 hover:rounded-b-[100%]  transition duration-500 ease-in-out"
          width="420px"
          height="420px"
        />
        <div className="absolute z-0  bottom-0 w-full  h-[calc(100%-24px)] bg-[#7126b640] border-2 border-[mediumpurple] rounded-full"></div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className=" absolute xs:bottom-10 bottom-[16px] w-full flex justify-center items-center ">
        <a href="#about" aria-label="Scroll to About Me Section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className=" w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
