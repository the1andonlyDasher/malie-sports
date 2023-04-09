import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const header_variants = {
  initial: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.5,},
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { type: "spring", stiffness: 100, duration: 0.5, delay: 0.25 },
  },
};

const FooterLink = ({ linkName, target }) => {
  return (
    <motion.li>
      <Link scroll={false} aria-label={linkName} className="btn__outline" href={`${target}`}>
        {linkName}
      </Link>
    </motion.li>
  );
};

export default FooterLink;
