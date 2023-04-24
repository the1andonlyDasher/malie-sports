import React from 'react';
import { motion } from "framer-motion";

const blob_variants = {
    hidden: { clipPath: "circle(0% at 50% 50%)" },
    enter: {
      clipPath: "circle(80% at 50% 50%)",
      transition: {
        duration: 0.75,
        delay: .5,
        type: "tween",
        ease: "circOut",
      },
    },
    exit: { clipPath: "circle(0% at 50% 50%)", transition:{delay: 1, duration: 0.5}},
  };

const BlobBg = ({children}) => {
    return (
        <motion.div
        className="bg__trans"
        variants={blob_variants}
        initial="hidden"
        animate="enter"
        exit="exit">
          {children}
        </motion.div>
    );
}

export default BlobBg;
