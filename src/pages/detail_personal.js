import React, { useRef } from "react";
import { NavItem } from "@/components/Nav/NavItemDesktop";
import Navigation from "@/components/Nav/Navigation";
import MobileNav from "@/components/Nav/MobileNav";
import { NavItem as Mnav } from "@/components/Nav/NavItemMobile";
import logo from "../../public/images/Logo-png-min.png";
import Navbar from "@/components/Nav/navbar";
import Section from "@/components/section";
import MainWrapper from "@/components/mainWrapper";
import BlobBg from "@/components/BlobBg";
import { motion, useAnimationControls } from "framer-motion";

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

const blob_variants = {
  hidden: { clipPath: "circle(0% at 15% 51%)" },
  exit: { clipPath: "circle(0% at 15% 51%)" },
  home: {
    clipPath: "circle(50% at 15% 51%)",
  },
  training: { clipPath: "circle(70% at 50% 0%)" },
  about: { clipPath: "circle(84% at 100% 50%)" },
  contact: { clipPath: "circle(70% at 20% 20%)" },
};

const DetailPersonal = () => {
  const controls = useAnimationControls();
  const navitems = ["Home", "Kontakt"];
  const hrefs = ["/", "/#contact"];
  return (
    <>
      <MainWrapper keyName={"personal"}>
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

        <BlobBg></BlobBg>
        <motion.div
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
        ></motion.div>
        <Section header="Personal Training" text="">
          <div className="__s__b">
            <div className="lr__wrapper text">
              <motion.div
                className="left-wrapper"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <p>
                  Als Personal Trainerin und Coach möchte ich dir dabei helfen,
                  deine Gesundheits- und Fitnessziele zu erreichen, während du
                  dein Leben als Mama jonglierst. Ich verstehe, dass es eine
                  Herausforderung sein kann, Zeit für regelmäßiges Training zu
                  finden, besonders wenn du Kinder/ein Kind zu Hause hast.
                  Oftmals kann es schwierig sein, das Fitnessstudio zu besuchen,
                  da es für dich und dein Kind möglicherweise nicht bequem oder
                  sicher ist. Außerdem kann es sein, dass die Betreuung im
                  Fitnessstudio nicht deinen Erwartungen entspricht und du dich
                  nach einer individuelleren Betreuung sehnst. Aus diesem Grund
                  biete ich dir als Personal Trainerin und Coach eine Lösung,
                  die genau auf deine Situation zugeschnitten ist. Wir können
                  das Training bei dir zu Hause oder im nahegelegenen Park
                  durchführen, damit du die Betreuung und Unterstützung
                  bekommst, die du benötigst, während dein Kind bei Dir sein
                  kann.{" "}
                </p>
              </motion.div>
              <motion.div
                className="right-wrapper"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <p>
                  Das Programm wird genau auf deine Bedürfnisse und Ziele
                  abgestimmt und eventuelle körperliche Einschränkungen
                  berücksichtigt. Wir können uns auf funktionelle Bewegungen,
                  Krafttraining, Ausdauertraining oder eine Kombination davon
                  konzentrieren, je nachdem, was für dich am besten
                  funktioniert. Als deine Personal Trainerin und Coach bin ich
                  auch deine Motivationsbegleitung und unterstütze dich dabei,
                  deine Ziele zu erreichen. Durch regelmäßige Betreuung und
                  Feedback können wir dein Training optimieren und schneller
                  Fortschritte erzielen. Darüber hinaus biete ich dir Tipps zur
                  Ernährung und einen ganzheitlichen Ansatz für deine Gesundheit
                  und dein Wohlbefinden. Ich glaube, dass jeder Mensch
                  einzigartig ist und einen individuellen Ansatz für Gesundheit
                  und Fitness benötigt. Mit meinem Personal Training bekommst du
                  eine individuelle Betreuung, die genau auf dich und deine
                  Bedürfnisse abgestimmt ist. Kontaktiere mich noch heute und
                  lass uns gemeinsam an deinem Ziel arbeiten!
                </p>
              </motion.div>
            </div>
          </div>
        </Section>
      </MainWrapper>
    </>
  );
};

export default DetailPersonal;
