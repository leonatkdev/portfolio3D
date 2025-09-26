import { motion } from "framer-motion";

import { styles } from "../../../style";
import leoAvatar from "../../../assets/leoavatar.png";
import Spotify from "../atoms/spotify";
import { FaSpotify } from "react-icons/fa";
// import { ComputersCanvas } from "../../canvas";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

// import pdf from "../pdf-cv/ResumeDark.pdf"
import { RxLinkedinLogo } from "react-icons/rx";
import { fadeIn, textVariant } from "../../../utils/motion";

const Hero = () => {
  return (
    <section
      className={`sm:px-16 px-3 pt-4  flex flex-col lg:flex-row-reverse sm:justify-center items-center gap-6 lg:gap-14 sm relative  mx-auto mt-[64px] 
        lg:h-[calc(100vh-88px)]
    `}
    >
      <div
        className={`inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-3 lg:gap-5`}
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col justify-center items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#6366f1] to-[#915eff] shadow-lg shadow-[#6366f1]/50" />
          <div className="w-1 lg:h-80 h-40 bg-gradient-to-b from-[#6366f1] to-[#915eff] shadow-lg shadow-[#6366f1]/30" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            {`Hi, I'm `}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#6366f1]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Leonat
            </motion.span>
          </h1>
          <motion.p 
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            I develop Web Applications <br className="sm:block hidden" />
            and Mobile Apps
          </motion.p>
          {/* <ul className="mt-4 flex gap-4">
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
            <li>
              <a
                href="https://open.spotify.com/user/31eozv4vnjfxxusxcz3673uzjgii"
                target="_blank"
                rel="noreferrer"
                className="text-[#915eff]"
              >
                <FaSpotify width={32} height={32} className="w-8 h-8" />
              </a>
            </li>
          </ul> */}

          {/* <a href="/path-to-your-cv/cv.pdf" download="Leonat_CV.pdf"
           className="block w-full text-center mt-4 lg:mt-6 bg-[#915eff] p-4 px-6 rounded-full"
          >
            <button className=" font-semibold">Download CV</button>
          </a> */}
      
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            {/* <span className=" text-nowrap">
              CV Mode
            </span> */}
            {/* <motion.a
              href="cv/LeonatKrasniqi-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 lg:mt-6 border border-[#915eff] p-4 px-6 rounded-full hover:bg-[#915eff]/10 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              CV
            </motion.a> */}
            {/* <motion.a
              href="cv/LeonatKrasniqi-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 lg:mt-6 bg-gradient-to-r from-[#915eff] to-[#6366f1] p-4 px-6 rounded-full hover:shadow-lg hover:shadow-[#915eff]/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
             CV
            </motion.a> */}

<motion.a
  href="cv/LeonatKrasniqi-CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full text-center mt-4 lg:mt-6 
             p-4 px-6 rounded-full  lg:w-3/4
             bg-gradient-to-r from-[#915eff]/80 via-[#915eff]/50 to-[#6366f1]/80 
             hover:shadow-lg hover:shadow-[#915eff]/50 
             transition-all duration-300 text-white font-medium"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
>
 View CV
</motion.a>

          </motion.div>

          {/* <Spotify /> */}
        </motion.div>
      </div>
      <motion.div 
        className="flex flex-col-reverse lg:flex-col gap-6"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <motion.div 
          className="relative overflow-hidden sm:overflow-visible"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={leoAvatar}
            alt="hero"
            loading="eager"
            className="relative z-10 w-[420px] sm:h-[420px] sm:w-[420px] object-cover rounded-b-[100%] rotate-45 hover:rotate-0 sm:hover:scale-[1.0] transition duration-500 ease-in-out"
            width="420px"
            height="420px"
            initial={{ rotate: 45, scale: 0.8 }}
            animate={{ rotate: 45, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.div 
            className="absolute top-[0px] bg-gradient-to-br from-[#7126b640] to-[#6366f140] border-2 border-[#915eff] rounded-full w-full sm:w-[420px] h-full sm:h-[420px] shadow-2xl shadow-[#915eff]/30"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          />
        </motion.div>
        <motion.ul 
          className="mt-4 flex gap-4 z-30 relative justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          {[
            { href: "https://www.linkedin.com/in/leonat-krasniqi-6b59a0223/", icon: RxLinkedinLogo, title: "LinkedIn" },
            { href: "https://github.com/leonatkdev", icon: FaGithub, title: "GitHub" },
            { href: "https://www.instagram.com/leonatk_1/", icon: FaInstagram, title: "Instagram" },
            { href: "https://open.spotify.com/user/31eozv4vnjfxxusxcz3673uzjgii", icon: FaSpotify, title: "Spotify" }
          ].map((social, index) => (
            <motion.li
              key={social.title}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.7 + index * 0.05 }}
            >
              <motion.a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-[#915eff] hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-[#915eff]/20 backdrop-blur-sm"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon
                  title={`${social.title} Logo`}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div 
        className="absolute z-20 xs:bottom-10 bottom-[16px] w-full flex justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <motion.a 
          href="#about" 
          aria-label="Scroll to About Me Section"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gradient-to-b from-[#915eff] to-[#6366f1] flex justify-center items-start p-2 backdrop-blur-sm bg-[#915eff]/10">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gradient-to-b from-[#915eff] to-[#6366f1] mb-1 shadow-lg shadow-[#915eff]/50"
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
