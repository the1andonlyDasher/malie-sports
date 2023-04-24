import { faArrowCircleDown, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView, useAnimationControls, useCycle } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

const header_variants = {
  initial: { x: -50, opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
      duration: 0.5,
      type: "tween",
      ease: "backOut",
      delay: 0.5,
    },
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.25,
      duration: 0.5,
      type: "tween",
      ease: "backOut",
    },
  },
};

const blob_variants = {
  initial: { clipPath: "circle(0% at 30% 50%)" },
  enter: {
    clipPath: "circle(30% at 30% 50%)",
    transition: { ease: "easeIn", stiffness: 100 },
  },
  exit: { clipPath: "circle(0% at 30% 50%)", transition: { duration: 0.25 } },
};

const wrapper_variants = {
  initial: {
    transition: { staggerChildren: 0.2 },
  },
  enter: {
    transition: { staggerChildren: 0.075, delayChildren: 0.25 },
  },
  exit: {
    transition: { staggerChildren: 0.2 },
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
    transition: { type: "spring", stiffness: 100, duration: 0.5 },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: { type: "tween", ease: "backOut", duration: 0.5 },
  },
};

const arrow_variants = {
  initial: {opacity: 0},
  enter: {y:[0, 10], opacity:[0,1], transition:{repeat: Infinity, duration: 1.5, type:"spring"}},
  exit:{opacity: 0}
}

const image_variants = {
  initial: { opacity: 0, clipPath: "circle(0% at 50% 50%)" },
  enter: { opacity: 1, clipPath: "circle(100% at 50% 50%)" },
  exit: { opacity: 0, clipPath: "circle(0% at 50% 50%)" },
};

const DetailHero = ({
  firstTitle,
  secondTitle,
  alternativeSub,
  text,
  subtitle,
  altText,
  btn_txt,
  btn_txt_sec,
  image,
  image2,
  image3,
  arrow
}) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "0px" });
  const controls = useAnimationControls();
  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start("enter");
      }, 500);
    }
  }, [controls, inView]);
  return (
    <>

      <motion.div
        initial="initial"
        whileInView="enter"
        viewport={{ margin: "100px 0px 100px 0px", amount:"some" }}
        exit="exit"
        className="detail__hero"
        ref={ref}
      >
                      <motion.div
        className="blob__detail"
        variants={blob_variants}
        style={{ transformOrigin: "center" }}
      ></motion.div>
        <motion.div variants={wrapper_variants} className="lr__wrapper mobile">
        <motion.div
        className="blob__detail"
        variants={blob_variants}
        style={{ transformOrigin: "center" }}
      ></motion.div>
          <motion.div variants={wrapper_variants} className="left-wrapper">
            <motion.div
              className="photo_large first"
              variants={image_variants}
              style={{ position: "absolute" }}
            >
              <Image
                alt={altText}
                src={`${image}`}
                placeholder="blur"
                blurDataURL={`${image}`}
                quality={100}
                fill
                sizes="100%"
                style={{
                  objectFit: "cover",
                }}
              />
            </motion.div>
            <motion.div
              className="photo_large second"
              variants={image_variants}
              style={{ position: "absolute" }}
            >
              <Image
                alt={altText}
                src={`${image2}`}
                placeholder="blur"
                blurDataURL={`${image2}`}
                quality={100}
                fill
                sizes="100%"
                style={{
                  objectFit: "cover",
                }}
              />
            </motion.div>
            <motion.div className="photo_large third" variants={image_variants}>
              <Image
                alt={altText}
                src={`${image3}`}
                placeholder="blur"
                blurDataURL={`${image3}`}
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
            {firstTitle || secondTitle ? (
              <h2>
                {firstTitle}
                <span>{secondTitle ? <red>{secondTitle}</red> : null}</span>
              </h2>
            ) : null}
            {alternativeSub ? <h3>{alternativeSub}</h3> : null}
            <p>{text}</p>
            <p className="sub">{subtitle} </p>
            {arrow ?  <motion.div className="arrow__Down" variants={arrow_variants}><FontAwesomeIcon icon={faArrowDown}/></motion.div> : null}
            {btn_txt || btn_txt_sec ? (
              <motion.div
                className="button__wrapper"
                variants={wrapper_variants}
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
            ) : null}
          </motion.div>
        </motion.div>
        <motion.div variants={wrapper_variants} className="lr__wrapper desktop">
          <motion.div className="left-wrapper" variants={header_variants}>
            {firstTitle || secondTitle ? (
              <h2>
                {firstTitle}
                <span>{secondTitle ? <red>{secondTitle}</red> : null}</span>
              </h2>
            ) : null}
            {alternativeSub ? <h3>{alternativeSub}</h3> : null}
            <p>{text}</p>
            <p className="sub">{subtitle} </p>
            {arrow ? (<motion.div className="arrow__Down" variants={arrow_variants}><FontAwesomeIcon icon={faArrowDown}/></motion.div>) : null}
            {btn_txt || btn_txt_sec ? (
              <motion.div
                className="button__wrapper"
                variants={wrapper_variants}
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
            ) : null}
          </motion.div>
          <motion.div variants={wrapper_variants} className="right-wrapper">
            <motion.div
              className="photo_large first"
              variants={image_variants}
              style={{ position: "absolute" }}
            >
              <Image
                alt={altText}
                src={`${image}`}
                placeholder="blur"
                blurDataURL={`${image}`}
                quality={100}
                fill
                sizes="100%"
                style={{
                  objectFit: "cover",
                }}
              />
            </motion.div>
            <motion.div
              className="photo_large second"
              variants={image_variants}
              style={{ position: "absolute" }}
            >
              <Image
                alt={altText}
                src={`${image2}`}
                placeholder="blur"
                blurDataURL={`${image2}`}
                quality={100}
                fill
                sizes="100%"
                style={{
                  objectFit: "cover",
                }}
              />
            </motion.div>
            <motion.div className="photo_large third" variants={image_variants}>
              <Image
                alt={altText}
                src={`${image3}`}
                placeholder="blur"
                blurDataURL={`${image3}`}
                quality={100}
                fill
                sizes="100%"
                style={{
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default DetailHero;
