import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../../style";
import { git, github } from "../../../assets";
import { SectionWrapper } from "../../../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../../../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  uniqueKey
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} key={uniqueKey}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=" bg-tertiary p-5 rounded 2*1 sm:w-[300px] w-full"
      >
        <div className=" relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <a
            href={source_code_link}
            className=" absolute top-2 right-2 z-10 rounded-full bg-gradient-to-r from-neutral-900 to-gray-200"
          >
            <img
              src={github}
              alt="Github"
              className=" w-5 h-5 object-contain"
            />
          </a>
        </div>

        <div className="mt-5">
          <h3 className=" text-white font-bold text-[24px]">{name}</h3>
          <p className=" mt-2 text-secondary  text-[14px]">{description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className=" w-full flex">
        <motion.p
          variants={fadeIn()}
          className=" mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className=" mt-20 flex flex-wrap gap-7">
        {projects?.map((project, index) => (
          <ProjectCard {...project} index={index} uniqueKey={project.name} key={project.name} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
