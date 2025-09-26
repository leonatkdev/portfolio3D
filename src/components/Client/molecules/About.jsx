import { motion } from "framer-motion";
import { SectionWrapper } from "../../../hoc";
import { styles } from "../../../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../../../utils/motion";
import {logo} from '../../../assets'
import React, { useRef, useState, useEffect } from "react";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.5)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am an adept software developer specializing in TypeScript and JavaScript, with a strong foundation in both front-end and back-end frameworks such as React Native, Node.js (specifically Express.js), and others. My skill set extends to creating dynamic, efficient, and scalable applications that prioritize user experience and functionality. With a proven track record of quickly adapting to new technologies and frameworks, I excel in collaborating with clients to develop solutions that address real-world challenges. Let's collaborate to transform your vision into reality.
      </motion.p>

      {/* Mobile Grid Layout */}
      <motion.div
        variants={fadeIn("", "", 0.2, 0.4)}
        className="lg:hidden mt-20"
      >
        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
          {/* Center Full Stack Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0 }}
            className="col-span-2 flex justify-center mb-4"
          >
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#915eff] to-[#6366f1] p-1 shadow-2xl shadow-[#915eff]/50">
                <div className="w-full h-full rounded-full bg-tertiary/90 backdrop-blur-sm flex items-center justify-center border border-[#915eff]/30">
                  <motion.img
                    src={logo}
                    alt="Full Stack"
                    className="w-12 h-12 object-contain"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-lg border border-[#915eff]/30"
              >
                <span className="text-white text-sm font-medium whitespace-nowrap">
                  Full Stack
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Service Cards */}
          {services.map((service, index) => (
            <motion.div
              key={service?.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
              className="group"
            >
              <motion.div
                className="relative bg-gradient-to-br from-tertiary/60 to-tertiary/30 p-4 rounded-xl backdrop-blur-sm border border-[#915eff]/20 hover:border-[#915eff]/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#915eff]/20 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="relative mb-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#915eff]/20 to-[#6366f1]/20 p-2 border border-[#915eff]/30 group-hover:border-[#915eff]/60 transition-colors duration-300">
                      <img
                        src={service?.icon}
                        alt={service?.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-white font-semibold text-xs group-hover:text-[#915eff] transition-colors duration-300">
                    {service?.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about")
