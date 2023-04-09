import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";

const variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 },
};

const SvgComponent = (props) => (
  <svg
    width={3.988}
    height={6.983}
    viewBox="0 0 1.055 1.848"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1.016.831a.13.13 0 0 1 0 .185l-.793.794a.131.131 0 0 1-.186-.185L.736.924.037.223A.131.131 0 0 1 .223.037z" />
  </svg>
);

const Card = ({ image, title, alt, subtitle, subtext, text, btn_target }) => {
  const controls = useAnimation();
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "0px 100px 100px 0px" });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  return (
    <motion.div
      ref={ref}
      className="base__item"
      variants={variants}
      initial="hidden"
      animate={controls}
      exit="exit"
      transition={{ duration: 1 }}
    >
      <div className="base__content">
        <Image src={image} alt={alt} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p className="sub">{subtext}</p>
        <p className="card__text">{text}</p>
        <div className="button__wrapper-services no-flex">
          <Link href="#contact">
            <button className="btn__primary no-flex">Jetzt loslegen</button>
          </Link>
          <Link href={`${btn_target}`} scroll={false}>
            <button className="secondary">
              Mehr erfahren
              <SvgComponent />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
