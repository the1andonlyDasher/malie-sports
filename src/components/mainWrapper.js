import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    hidden: { },
    enter: { transition:{delayChildren: 2, duration: 1} },
    exit: {  transition:{ duration: 1, delay: 1} },
  };

const MainWrapper = ({children, keyName}) => {
    return (
        <motion.div 
        key={keyName}
        variants={variants} 
        initial="hidden"
        animate="enter"
        exit="exit"
        className='main'
        >
            {children}
        </motion.div>
    );
}

export default MainWrapper;
