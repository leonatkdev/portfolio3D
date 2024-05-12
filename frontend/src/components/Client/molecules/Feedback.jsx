import { motion } from "framer-motion";

import { styles } from "../../../style";
import { SectionWrapper } from "../../../hoc";
import { fadeIn, textVariant } from "../../../utils/motion";

import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name ,designation, company, image }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className=" bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className=" text-white font-black text-[48px]">{`"`}</p>
      <p className=" text-white tracking-wider text-[18px]">{testimonial}</p>

      <span className="block mt-3 text-[16px] text-cyan-500">@ {name}</span>
      <p className=" mt-1 text-secondary text-[12px]">{designation} {company && "of " + company}</p>
    </motion.div>
  );
};

const Feedback = () => {
  return (
    <div className=" mt-12 rounded-[20px] bg-costume-gradientTwo">
      <div
        className={`${styles.padding} rounded-2xl `}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX}  flex flex-wrap gap-7 pb-8`}>
        {testimonials?.map((testimonial, index) => (
          <FeedbackCard
            {...testimonial}
            index={index}
            key={testimonial.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedback, "");
