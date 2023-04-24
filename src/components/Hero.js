import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  initial: {y: 50, opacity: 0,
},
  animate: {y: 0, opacity: 1,
    transition:{
      type:"tween",
      ease: "easeIn",
      delay: 1.25,
      duration: 0.5
    }},
  exit: {y: 50, opacity: 0,
    transition:{
      type:"tween",
      ease: "easeOut",

      duration: 0.5
    }},
}

const Hero = () => {
    return (
        <>

          <div className="lr__wrapper">
            <motion.div className="left-wrapper" 
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  >
              <h1>Personal Training<br /> <strong> da wo du bist!</strong></h1>
              <p>
              Egal ob bei dir zu Hause oder im Park. Mit gezielten Ausdauer- und
              Kräftigungsübungen zu einem positiven Körpergefühl.
              </p>

              <button type="button" className="btn__primary"><a href="#contact">Jetzt loslegen</a></button>

            </motion.div>
            <div className="right-wrapper"></div>
          </div>

        </>
    );
}

export default Hero;
