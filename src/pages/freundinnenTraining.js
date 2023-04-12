import React, { useEffect, useRef, useState } from "react";
import { NavItem } from "@/components/Nav/NavItemDesktop";
import Navigation from "@/components/Nav/Navigation";
import MobileNav from "@/components/Nav/MobileNav";
import { NavItem as Mnav } from "@/components/Nav/NavItemMobile";
import logo from "../../public/images/malie-Logo.svg";
import Navbar from "@/components/Nav/navbar";
import Section from "@/components/section";
import BlobBg from "@/components/BlobBg";
import {
  motion,
  useAnimationControls,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { InView, useInView as useView } from "react-intersection-observer";
import DetailHero from "@/components/DetailHero";

const variants = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeIn",
      delay: 1.25,
      duration: 0.5,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeOut",

      duration: 0.5,
    },
  },
};

const list_varianst = {
  hidden: {
    opacity: 0,
    transition: { staggerChildren: 0.2 },
  },
  enter: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.25 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.2 },
  },
};

const item_variants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const blob_variants = {
  hidden: { clipPath: "circle(0% at 15% 51%)" },
  exit: { clipPath: "circle(0% at 15% 51%)" },
  personal: {
    clipPath: "circle(30% at 30% 50%)",
  },
  training: { clipPath: "circle(70% at 50% 0%)" },
  about: { clipPath: "circle(84% at 100% 50%)" },
  contact: { clipPath: "circle(70% at 20% 20%)" },
};

const DetailPersonal = () => {
  const controls = useAnimationControls();
  const list_controls = useAnimationControls();
  const list1 = useRef();
  const list2 = useRef();
  const listInView = useInView(list1, {
    once: true,
    margin: "0px",
    amount: "all",
  });
  const { ref, inView, entry } = useView({
    threshold: 0.3,
  });
  const navitems = ["Home", "Kontakt"];
  const hrefs = ["/", "/#contact"];
  const [first, setFirst] = useState(true);
  useEffect(() => {
    if (listInView) {
      list_controls.start("enter");
    }
    if (typeof window !== "undefined") {
      // Get the hash from the url
      const hashId = window.location.hash;
      if (hashId) {
        return;
      } else {
        if (inView) {
          setTimeout(() => {
            controls.start("personal");
          }, 500);
        }
        setFirst(false);
      }
    }
  }, [inView, first, inView, list_controls]);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    bounce: 0,
    stiffness: 500,
    damping: 50,
  });
  return (
    <>
      <Navbar logo={logo} alt="Logo von Malie Sports">
        <Navigation>
          {navitems.map((i, index) => (
            <NavItem key={i} name={i} href={hrefs[index]} />
          ))}
        </Navigation>
        <MobileNav>
          {navitems.map((i, index) => (
            <Mnav key={i} name={i} href={hrefs[index]} />
          ))}
        </MobileNav>
      </Navbar>
      {/* <div className="svg__wrapper"         style={{zIndex: -2}}>
        <motion.svg
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          initial="hidden"
          animate="visible"
  
        >
          <motion.line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="#491b1b"
            strokeWidth={3}
            custom={2}
            style={{ pathLength: pathLength }}
      
          />
        </motion.svg>
      </div> */}
      <BlobBg></BlobBg>
      {/* <motion.div
        className="blob"
        variants={blob_variants}
        initial="hidden"
        animate={controls}
        exit="exit"
        transition={{
          duration: 0.75,
          type: "tween",
          ease: "circOut",
        }}
      ></motion.div> */}
      <InView
        threshold={0.6}
        rootMargin="100px 0px 100px 0px"
        as="div"
        onChange={(inView, entry) => {
          if (!first) {
            inView
              ? controls.start(
                  `${entry.target.firstChild.getAttribute("data-section-name")}`
                )
              : null;
          }
        }}
      >
        <Section
          ref={ref}
          sectionName="personal"
          header="Personal Training"
          text=""
        >
          <DetailHero
            altText={"Personal Training"}
            alternativeSub={"Was ist das Freundinnen Training?"}
            text="Als erfahrene Personal Trainerin möchte ich dir und deiner Freundin gerne das Freundinnen Training anbieten, das speziell auf eure individuellen Bedürfnisse und Ziele abgestimmt ist. Egal, ob ihr euch einfach fit halten wollt, eure Ausdauer verbessern oder gezielt Muskeln aufbauen möchtet - wir werden gemeinsam ein effektives Workout planen, das euch dabei unterstützt."
            image={"/images/freundinnen.webp"}
            image2={"/images/P1990401.webp"}
            image3={"/images/P1990002.webp"}
          ></DetailHero>
        </Section>
      </InView>
      <InView
        threshold={0.6}
        rootMargin="100px 0px 100px 0px"
        as="div"
        onChange={(inView, entry) => {
          if (!first) {
            inView
              ? controls.start(
                  `${entry.target.firstChild.getAttribute("data-section-name")}`
                )
              : null;
          }
        }}
      >
        <Section sectionName="">
          <DetailHero
            altText={"Freundinnen Training"}
            alternativeSub={"Was erwartet dich?"}
            text="Selbstverständlich könnt ihr eure Kinder mitbringen, denn das Training soll für euch so stressfrei wie möglich sein. Ihr habt die Möglichkeit, das Workout bei euch zu Hause durchzuführen oder in einem nahegelegenen Park an der frischen Luft zu trainieren. Die Wahl des Ortes hängt ganz von euren Vorlieben und Bedürfnissen ab."
            image={"/images/P1990355.webp"}
            image2={"/images/P1990396.webp"}
            image3={"/images/P1990689.webp"}
          ></DetailHero>
        </Section>
      </InView>
      <InView
        threshold={0.6}
        rootMargin="100px 0px 100px 0px"
        as="div"
        onChange={(inView, entry) => {
          if (!first) {
            inView
              ? controls.start(
                  `${entry.target.firstChild.getAttribute("data-section-name")}`
                )
              : null;
          }
        }}
      >
        <Section animate={controls}>
          <DetailHero
            altText={"Freundinnen Training"}
            alternativeSub={"Mehr als zusammen trainieren"}
            text="Durch das Freundinnen Training könnt ihr nicht nur eure Fitness verbessern, sondern auch eure Freundschaft stärken. Ihr könnt euch gegenseitig motivieren, unterstützen und gemeinsam Erfolge feiern. Das Training ist auch kosteneffizient, da ihr die Kosten gemeinsam teilen könnt. Also zögert nicht und meldet euch jetzt für das Freundinnen Training an! Gemeinsam können wir eure Fitnessreise starten und euch zu einem gesünderen und glücklicheren Lebensstil verhelfen."
            image={"/images/P1990083.webp"}
            image2={"/images/P1980895.webp"}
            image3={"/images/P1980759.webp"}
          ></DetailHero>
        </Section>
      </InView>
      <InView
        threshold={0.6}
        rootMargin="100px 0px 100px 0px"
        as="div"
        onChange={(inView, entry) => {
          if (!first) {
            inView
              ? (controls.start(
                  `${entry.target.firstChild.getAttribute("data-section-name")}`
                ),
                list_controls.start("enter"))
              : null;
          }
        }}
      >
        <Section animate={controls} header="Deine Vorteile">
          <div className="lr__wrapper text">
            <motion.div
              variants={list_varianst}
              initial="hidden"
              animate={list_controls}
              exit="exit"
              className="left-wrapper"
            >
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />Individuell zugeschnittenes Workout auf eure Bedürfnisse und Ziele
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Möglichkeit, Kinder mitzubringen
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Flexibilität in der Wahl des Ortes (bei euch zu Hause oder im Park)
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Kosteneffizient, da ihr die Kosten teilen könnt
              </motion.li>
            </motion.div>
            <motion.div
              ref={list2}
              variants={list_varianst}
              initial="hidden"
              animate={list_controls}
              exit="exit"
              className="right-wrapper"
            >
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Möglichkeit, sich gegenseitig zu motivieren und unterstützen
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Stärkung der Freundschaft
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Verbesserung der Fitness und Erreichung von Fitnesszielen
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Gesünderer und glücklicherer Lebensstil
              </motion.li>
            </motion.div>
          </div>
        </Section>
      </InView>
    </>
  );
};

export default DetailPersonal;
