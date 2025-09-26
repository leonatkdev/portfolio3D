import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../../style";
import { git, github } from "../../../assets";
import { SectionWrapper } from "../../../hoc";
import { projects } from "../constants";
import { FaGithub } from "react-icons/fa";
import { fadeIn, textVariant } from "../../../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  github_repo_link,
  uniqueKey,
}) => {
  return (
    <motion.div
      key={uniqueKey}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group w-full"
    >
      <div className="bg-gradient-to-br from-tertiary/80 to-tertiary/40 rounded-2xl backdrop-blur-sm border border-[#915eff]/20 hover:border-[#915eff]/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#915eff]/20 overflow-hidden">
        {/* Desktop Layout */}
        <div className="hidden lg:flex">
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-white font-bold text-2xl group-hover:text-[#915eff] transition-colors duration-300">
                {name}
              </h3>
              <div className="flex gap-2">
                {github_repo_link && (
                  <motion.a
                    href={github_repo_link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg text-white text-sm hover:bg-white/20 transition-colors duration-300 border border-white/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                )}
                {source_code_link && (
                  <motion.a
                    href={source_code_link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center bg-gradient-to-r from-[#915eff] to-[#6366f1] px-3 py-2 rounded-lg text-white text-sm hover:shadow-lg hover:shadow-[#915eff]/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>

            <p className="text-secondary text-base leading-relaxed mb-6">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, tagIndex) => (
                <motion.span
                  key={tag.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                  className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r from-[#915eff]/20 to-[#6366f1]/20 border border-[#915eff]/30 ${tag.color}`}
                >
                  #{tag.name}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="w-80 h-64 relative overflow-hidden">
            <motion.img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-tertiary/20" />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="relative w-full h-48 overflow-hidden">
            <motion.img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />

            {/* Buttons always visible on mobile */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {github_repo_link && (
                <motion.a
                  href={github_repo_link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full text-white text-sm hover:bg-white/30 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="w-4 h-4 mr-2" />
                  Code
                </motion.a>
              )}
              {source_code_link && (
                <motion.a
                  href={source_code_link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center bg-[#915eff]/80 backdrop-blur-sm px-3 py-2 rounded-full text-white text-sm hover:bg-[#915eff] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              )}
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-white font-bold text-xl group-hover:text-[#915eff] transition-colors duration-300 mb-2">
              {name}
            </h3>
            <p className="text-secondary text-sm leading-relaxed mb-4">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, tagIndex) => (
                <motion.span
                  key={tag.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                  className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r from-[#915eff]/20 to-[#6366f1]/20 border border-[#915eff]/30 ${tag.color}`}
                >
                  #{tag.name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
      // variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className=" w-full flex">
        <motion.p
          // variants={fadeIn()}
          className=" mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 space-y-8">
        {projects?.map((project, index) => (
          <ProjectCard
            {...project}
            index={index}
            uniqueKey={project.name}
            key={project.name}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
