import React from 'react';
import { motion, useInView, useAnimationControls } from "framer-motion";

const blob_variants = {
    hidden: { clipPath: "circle(0% at 15% 51%)" },
    enter: {
      clipPath: "circle(50% at 15% 51%)",
      transition: {
        duration: 0.75,
        delay: 1,
        type: "tween",
        ease: "circOut",
        delay: 1
      },
    },
    exit: { clipPath: "circle(0% at 15% 51%)" },
    training:{ clipPath: "clip-path: circle(70% at 50% 0%)"},
    about:{clipPath: "circle(84% at 100% 50%)"},
    contact:{clipPath: "circle(70% at 20% 20%)"},
  };

const BlobHome = () => {
    return (
        <motion.div
        className="blob"
        variants={blob_variants}
        initial="hidden"
        animate="enter"
        exit="exit">
        </motion.div>
    );
}

export default BlobHome;
