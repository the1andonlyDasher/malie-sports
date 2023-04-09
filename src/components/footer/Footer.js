import React from "react";
import { motion } from "framer-motion";

const header_variants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { type: "spring", stiffness: 100, duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.5, delay: 0.5 },
  },
};

const section_variants = {
  initial: {
    transition: { staggerChildren: 0.2 },
  },
  enter: {
    transition: { staggerChildren: 0.2, delayChildren: 0.35 },
  },
  exit: {
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const Footer = ({footerText, children}) => {
  return (
    <>
      <motion.footer variants={header_variants} className="footer">
        <h5>{footerText}</h5>
        <motion.ul variants={section_variants} className="footer-links">
          {children}
        </motion.ul>
      </motion.footer>
    </>
  );
};

export default Footer;
