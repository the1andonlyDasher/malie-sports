import React, { useEffect, useRef, useState } from "react";
import { NavItem } from "@/components/Nav/NavItemDesktop";
import Navigation from "@/components/Nav/Navigation";
import MobileNav from "@/components/Nav/MobileNav";
import { NavItem as Mnav } from "@/components/Nav/NavItemMobile";
import logo from "../../public/images/malie-Logo.svg";
import Navbar from "@/components/Nav/navbar";
import Section from "@/components/section";
import BlobBg from "@/components/BlobBg";
import { motion, useAnimationControls, useInView, useScroll, useSpring } from "framer-motion";
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
  const { scrollYProgress } = useScroll()
  const pathLength = useSpring(scrollYProgress, {bounce: 0, stiffness: 500, damping: 50})
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
        rootMargin="0px 100px -50px 0px"
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
            alternativeSub={"Warum Personal Training"}
            text="Als Personal Trainerin und Coach möchte ich dir dabei helfen,
                deine Gesundheits- und Fitnessziele zu erreichen, während du
                dein Leben als Mama jonglierst. Ich verstehe, dass es eine
                Herausforderung sein kann, Zeit für regelmäßiges Training zu
                finden, besonders wenn du Kinder/ein Kind zu Hause hast. Oftmals
                kann es schwierig sein, das Fitnessstudio zu besuchen, da es für
                dich und dein Kind möglicherweise nicht bequem oder sicher ist.
                Außerdem kann es sein, dass die Betreuung im Fitnessstudio nicht
                deinen Erwartungen entspricht und du dich nach einer
                individuelleren Betreuung sehnst"
            image={"/images/personal.webp"}
            image2={"/images/P1980899.webp"}
            image3={"/images/P19900134.webp"}
          ></DetailHero>
        </Section>
      </InView>
      <InView
        threshold={0.6}
        rootMargin="0px 100px -50px 0px"
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
            altText={"Personal Training"}
            alternativeSub={"Was erwartet dich?"}
            text="Aus diesem Grund biete ich dir als Personal Trainerin und Coach
                eine Lösung, die genau auf deine Situation zugeschnitten ist.
                Wir können das Training bei dir zu Hause oder im nahegelegenen
                Park durchführen, damit du die Betreuung und Unterstützung
                bekommst, die du benötigst, während dein Kind bei Dir sein kann.
                Das Programm wird genau auf deine Bedürfnisse und Ziele
                abgestimmt und eventuelle körperliche Einschränkungen
                berücksichtigt. Wir können uns auf funktionelle Bewegungen,
                Krafttraining, Ausdauertraining oder eine Kombination davon
                konzentrieren, je nachdem, was für dich am besten funktioniert."
            image={"/images/P1990357.webp"}
            image2={"/images/P1990178.webp"}
            image3={"/images/P1980903.webp"}
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
            altText={"Personal Training"}
            alternativeSub={"Mehr als Coaching"}
            text="Als deine Personal Trainerin und Coach bin ich auch deine
                Motivationsbegleitung und unterstütze dich dabei, deine Ziele zu
                erreichen. Durch regelmäßige Betreuung und Feedback können wir
                dein Training optimieren und schneller Fortschritte erzielen.
                Darüber hinaus biete ich dir Tipps zur Ernährung und einen
                ganzheitlichen Ansatz für deine Gesundheit und dein
                Wohlbefinden. Ich glaube, dass jeder Mensch einzigartig ist und
                einen individuellen Ansatz für Gesundheit und Fitness benötigt.
                Mit meinem Personal Training bekommst du eine individuelle
                Betreuung, die genau auf dich und deine Bedürfnisse abgestimmt
                ist. Kontaktiere mich noch heute und lass uns gemeinsam an
                deinem Ziel arbeiten!"
            image={"/images/P1990763.webp"}
            image2={"/images/P1990400.webp"}
            image3={"/images/P1980905.webp"}
          ></DetailHero>
        </Section>
      </InView>
      <InView
        threshold={0.6}
        rootMargin="0px 100px -50px 0px"
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
                <FontAwesomeIcon icon={faArrowRight} /> Flexibles und
                individuelles Training von zu Hause aus
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Individuelles Trainingsprogramm auf Bedürfnisse und Ziele
                abgestimmt
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Berücksichtigung körperlicher Einschränkungen
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Zeit- und Aufwandsersparnis durch fehlende Anfahrt zum
                Fitnessstudio
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
                Privatsphäre und Komfort des eigenen Zuhauses
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Regelmäßige Betreuung und Feedback zur Optimierung des Trainings
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Motivationsbegleitung und Unterstützung beim Erreichen der Ziele
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Zufriedenheit und Trainingserlebnis stehen an erster Stelle.
              </motion.li>
            </motion.div>
          </div>
        </Section>
      </InView>
    </>
  );
};

export default DetailPersonal;
