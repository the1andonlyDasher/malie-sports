import React from "react";
import { motion } from "framer-motion";
const variants = {
  hidden:{opacity: 0,
  transition:{staggerChildren: 0.07, when: "afterChildren",}},
  visible: {
     opacity: 1,
     delay: 1.25, 
    transition:{
      when: "beforeChildren",
      staggerChildren: 0.07, delayChildren: 0.2
    }
  },
};
const CardList = ({ children }) => {
    return (
      <motion.div
      className="base__list"
        variants={variants}
        initial="hidden"
        animate="visible"
    >
      {children}
    </motion.div>
  );
};

export default CardList;
