import React, { useRef, forwardRef } from "react";
import { motion } from "framer-motion";

const section_variants = {
  initial: {
    transition: { staggerChildren: 0.2 },
  },
  enter: {
    transition: { staggerChildren: 0.2, delayChildren: 0.35 },
  },
  exit: {
    transition: { staggerChildren: 0.2 },
  },
};

const header_variants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { ease:"easeIn", duration: 0.5, delay: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { ease:"easeOut", duration: 0.5 },
  },
};

const Section = forwardRef(function Section(props, ref) {
  const wrapper = useRef();
  return (
    <motion.section
      data-section-name={props.sectionName}
      initial="initial"
      whileInView="enter"
      viewport={{ margin: "100px 0px 100px 0px" }}
      exit="exit"
      ref={ref}
      id={props.id}
      variants={section_variants}
    >
      <motion.div ref={wrapper} variants={section_variants} className="__s__b">
        {props.header ? (
          <motion.h2 variants={header_variants}>{props.header}</motion.h2>
        ) : null}
        {props.text ? (
          <motion.p variants={header_variants}>{props.text}</motion.p>
        ) : null}
        {props.children}
      </motion.div>
    </motion.section>
  );
});

export default Section;
