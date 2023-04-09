import { motion  } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const header_variants = {
  initial: { x: -50, opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
      ease: "backOut",
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 1,
      type: "tween",
      ease: "backOut",
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

const wrapper_variants = {
  initial: {
    transition: { staggerChildren: 0.2 },
  },
  enter: {
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
  exit: {
    transition: { staggerChildren: 0.2, delayChildren: 0.75 },
  },
};

const button_variants = {
  initial: {
    y: 20,
    opacity: 0,
    transition: { type: "tween", ease: "backOut", duration: 0.5 },
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "backOut",
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

const image_variants = {
  initial: { opacity: 0, clipPath: "circle(0% at 50% 50%)" },
  enter: { opacity: 1, clipPath: "circle(100% at 50% 50%)" },
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
  return (
    <motion.div         initial="initial"
    whileInView="enter"
    viewport={{margin:"100px 0px 100px 0px"}}
    exit="exit"ref={ref}>
      <motion.div
variants={wrapper_variants}
        className="lr__wrapper"
      >
        <motion.div  className="left-wrapper">
          <motion.div className="photo_large" variants={image_variants}>
            <Image
              alt={altText}
              src={image}
              placeholder="empty"
              quality={100}
              fill
              sizes="100%"
              style={{
                objectFit: "cover",
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div variants={header_variants} className="right-wrapper">
          <h2>
            {firstTitle}
            <span>{secondTitle ? <red>{secondTitle}</red> : null}</span>
          </h2>
          {alternativeSub ? <h3>{alternativeSub}</h3> : null}
          <p>{text}</p>
          <p className="sub">{subtitle} </p>
          <motion.div className="button__wrapper" variants={wrapper_variants}>
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
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
