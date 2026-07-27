import { motion, useReducedMotion } from "framer-motion";

/**
 * The single motion primitive for the site: a short rise + fade that runs once
 * when an element scrolls into view, and does nothing at all when the visitor
 * asks for reduced motion.
 */
const Reveal = ({ children, delay = 0, y = 14, className = "", as = "div" }) => {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
