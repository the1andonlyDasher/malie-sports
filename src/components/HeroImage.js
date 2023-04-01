import { motion, useInView, useAnimationControls } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

const header_variants = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
};

const wrapper_variants = {
  hidden: {
    transition: { staggerChildren: 0.07 },
  },
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const button_variants = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: { type: "tween", ease: "backOut", duration: 0.5 },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, duration: 0.5 },
  },
};

const image_variants = {
  initial: { opacity: 0, clipPath: "circle(0% at 50% 50%)" },
  animate: { opacity: 1, clipPath: "circle(100% at 50% 50%)" },
  exit: { opacity: 0, clipPath: "circle(0% at 50% 50%)" },
};

const HeroImage = ({
  firstTitle,
  secondTitle,
  alternativeSub,
  text,
  subtitle,
  altText,
  btn_txt,
  btn_txt_sec,
  image,
}) => {
  const ref = useRef();
  const sectionHeader = useRef();
  const inView = useInView(sectionHeader, {
    once: true,
    margin: "0px 0px -500px 0px",
  });
  const controls = useAnimationControls();
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <div className="__s__b">
      <div className="lr__wrapper">
        <div className="left-wrapper">
          <motion.div
            className="photo_large"
            variants={image_variants}
            initial="initial"
            animate={controls}
            exit="exit"
            transition={{
              duration: 1,
              delay: 0.5,
              type: "tween",
              ease: "backOut",
            }}
          >
            <Image
              alt={altText}
              src={image}
              placeholder="blur"
              quality={100}
              fill
              sizes="100%"
              style={{
                objectFit: "cover",
              }}
            />
          </motion.div>
        </div>
        <motion.div
          variants={header_variants}
          ref={sectionHeader}
          initial="initial"
          animate={controls}
          exit="exit"
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
          className="right-wrapper"
        >
          <h2>
            {firstTitle}
            <span>{secondTitle ? <red>{secondTitle}</red> : null}</span>
          </h2>
          {alternativeSub ? <h3>{alternativeSub}</h3> : null}
          <p>{text}</p>
          <p className="sub">{subtitle} </p>
          <motion.div
            className="button__wrapper"
            variants={wrapper_variants}
            initial="hidden"
            animate="visible"
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            {btn_txt ? (
              <motion.button
                variants={button_variants}
                className="btn__primary"
              >
                {btn_txt}
              </motion.button>
            ) : null}
            {btn_txt_sec ? (
              <motion.button
                variants={button_variants}
                className="btn__outline"
              >
                {btn_txt_sec}
              </motion.button>
            ) : null}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroImage;
