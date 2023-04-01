import "@/styles/style.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const variants = {
  hidden: {  opacity: 0 },
  enter: {  opacity: 1, transition:{delayChildren: 2, duration: 1} },
  exit: {  opacity: 0, transition:{ duration: 1, delay: 2} },
};

export default function App({ Component, pageProps, router }) {
  

  return (
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => {
        if (typeof window !== 'undefined') {
          // Get the hash from the url
          const hashId = window.location.hash;
      
          if (hashId) {
            // Use the hash to find the first element with that id
            const element = document.querySelector(hashId);
      
            if (element) {
              // Smooth scroll to that elment
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              });
            }
      
          }
        }
      }}
    >
              <motion.div 
        key={router.route}
        variants={variants} 
        initial="hidden"
        animate="enter"
        exit="exit"
        className='main'
        >
      <Component {...pageProps}/>
      </motion.div>
    </AnimatePresence>
  );
}
