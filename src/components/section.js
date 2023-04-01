import React, { useRef, useEffect, forwardRef } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";

const header_variants = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
};

const Section = forwardRef(function Section(props, ref) {
  const sectionHeader = useRef();
  const inView = useInView(sectionHeader, {
    once: true,
    margin: "0px 100px 100px 0px",
  });
  const controls = useAnimationControls();
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <section data-section-name={props.sectionName} ref={ref} id={props.id}>
      {props.header ? (
        <motion.h2
          ref={sectionHeader}
          variants={header_variants}
          initial="initial"
          animate={controls}
          exit="exit"
          transition={{ type: "spring", stiffness: 100, duration: 1 }}
        >
          {props.header}
        </motion.h2>
      ) : null}
      {props.text ? (
        <motion.p
          variants={header_variants}
          initial="initial"
          animate={controls}
          exit="exit"
          transition={{ type: "spring", stiffness: 100, duration: 1 }}
        >
          {props.text}
        </motion.p>
      ) : null}
      {props.children}
    </section>
  );
});

export default Section;
