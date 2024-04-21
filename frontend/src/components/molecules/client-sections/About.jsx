import {Tilt} from "react-tilt";
import { motion, spring } from "framer-motion";

import { SectionWrapper } from "../../../hoc";

import { styles } from "../../../style";
import { services } from "../../../constants";
import { fadeIn, textVariant } from "../../../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="flex-1">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index)}
        className="w-full p-[1px] rounded-[20px] shadow-card bg-gradient-to-r from-indigo-500 "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col  "
        >
          <img src={icon} alt={title} className=" w-16 h-16 object-contain" />
          <h3 className=" text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {`
       I am an adept software developer specializing in TypeScript and JavaScript, with a strong foundation in both front-end and back-end frameworks such as React Native, Node.js (specifically Express.js), and others. My skill set extends to creating dynamic, efficient, and scalable applications that prioritize user experience and functionality. With a proven track record of quickly adapting to new technologies and frameworks, I excel in collaborating with clients to develop solutions that address real-world challenges. Let's collaborate to transform your vision into reality.`}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")
