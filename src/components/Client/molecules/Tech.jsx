import { motion } from 'framer-motion';
import { SectionWrapper } from '../../../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../../../utils/motion';

const TechCard = ({ tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-30px" }}
      className="group"
    >
      <motion.div
        className="relative bg-gradient-to-br from-tertiary/60 to-tertiary/30 p-6 rounded-2xl backdrop-blur-sm border border-[#915eff]/20 hover:border-[#915eff]/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#915eff]/20 cursor-pointer"
        whileHover={{ 
          scale: 1.05, 
          y: -5,
          rotateY: 5,
          rotateX: 5
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="relative mb-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#915eff]/20 to-[#6366f1]/20 p-3 border border-[#915eff]/30 group-hover:border-[#915eff]/60 transition-colors duration-300">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </div>
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#915eff]/10 to-[#6366f1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>
          
          <h3 className="text-white font-semibold text-sm group-hover:text-[#915eff] transition-colors duration-300">
            {tech.name}
          </h3>
          
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#915eff]/5 to-[#6366f1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-sm uppercase tracking-wider">Technologies</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Tech Stack
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I work with a variety of technologies to create modern, scalable, and efficient applications.
      </motion.p>

      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies?.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech')