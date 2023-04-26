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
          header="Events"
          text=""
        >
          <DetailHero
            altText={"Events"}
            alternativeSub={"...die unvergessliche Erlebnisse bescheren!"}
            text="Ich bin deine Trainerin und ich biete dir und deinen weiblichen Gästen eine unvergessliche Erfahrung, die sich auf Bewegung, Teamwork und Spaß konzentriert. Meine Sportevents sind perfekt für Frauen, die auf der Suche nach einer aktiven und unterhaltsamen Art der Veranstaltung sind.
            Mit meinen Sportevents kannst du sicherstellen, dass dein Event zu einem unvergesslichen Erlebnis wird. Meine Angebote umfassen verschiedene Aktivitäten, die auf die Bedürfnisse und Interessen von Frauen zugeschnitten sind. Egal, ob du nach einer Herausforderung suchst oder einfach nur eine entspannte Zeit mit Freundinnen verbringen möchtest, ich habe das perfekte Event für dich.
            "
            image={"/images/events.webp"}
            image2={"/images/P1980976-scaled.webp"}
            image3={"/images/P1990169.webp"}
            arrow={true}
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
            altText={"Events"}
            alternativeSub={"Was erwartet dich?"}
            text="Ich biete auch Hula Hoop Fitness als Teil meines Sportevent-Angebots für Frauen an. Hula Hoop ist nicht nur eine unterhaltsame Aktivität, sondern auch ein großartiges Workout für den gesamten Körper. Diese Sportart kann auf jede Fitnessstufe angepasst werden und ist daher für Frauen jeden Alters geeignet.
            Während meines Hula Hoop Fitness Events für Frauen werde ich dich und deine Gäste durch verschiedene Übungen führen, die auf die Stärkung der Bauch-, Bein- und Rückenmuskulatur abzielen. Hula Hoop ist auch ein großartiges Cardio-Training und hilft dabei, den Stoffwechsel anzukurbeln und Kalorien zu verbrennen"
            image={"/images/P1990083.webp"}
            image2={"/images/P1990098.webp"}
            image3={"/images/P1980976.webp"}
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
        <Section animate={controls}>
          <DetailHero
            altText={"Events"}
            alternativeSub={"Mehr als Coaching"}
            text="Als erfahrene Trainerin weiß ich, wie wichtig es ist, dass jede Teilnehmerin meiner Sportevents Spaß hat und sich wohl fühlt. Deshalb werde ich dafür sorgen, dass du und deine weiblichen Gäste eine großartige Zeit haben werden. Ich werde mich um alle Details kümmern und sicherstellen, dass alles reibungslos verläuft.
            Meine Sportevents eignen sich auch hervorragend als Teambuilding-Aktivitäten für Frauen. Ich habe Erfahrung in der Arbeit mit Frauenteams und kann dir helfen, dein Team zu motivieren und zu stärken. 
            "
            image={"/images/P1990213.webp"}
            image2={"/images/P1990088.webp"}
            image3={"/images/P1990545.webp"}
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
        <Section animate={controls}>
          <DetailHero
            altText={"Events"}
            alternativeSub={"Worauf wartest du?"}
            text="Durch meine Aktivitäten können sich deine Mitarbeiterinnen besser kennenlernen und ihre Teamfähigkeit verbessern. Und das Beste ist: All dies geschieht in einer entspannten und unterhaltsamen Atmosphäre, die das Engagement und die Motivation deiner Mitarbeiterinnen erhöht.
            Also, wenn du auf der Suche nach einem einzigartigen und unterhaltsamen Event für Frauen bist, das auf Bewegung, Teamwork und Spaß basiert, dann melde dich bei mir und lass uns gemeinsam dein perfektes Sportevent für Frauen planen!"
            image={"/images/P1990123.webp"}
            image2={"/images/P1990131.webp"}
            image3={"/images/P1990093.webp"}
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
          <motion.div className="lr__wrapper text">
            <motion.div
              variants={list_varianst}
              initial="hidden"
              animate={list_controls}
              exit="exit"
              className="left-wrapper"
            >
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} /> Individuelle Eventplanung
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Körperliche Aktivität und Gesundheit
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Teamarbeit und Zusammenhalt
              </motion.li>
            </motion.div>
            <motion.div
              ref={list2}
              variants={list_varianst}
              initial="hidden"
              animate={list_controls}
              exit="exit"
              className="right-wrapper"
              style={{flexDirection:"column"}}
            >
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Stressabbau und Entspannung
              </motion.li>
              <motion.li variants={item_variants} className="detail">
                <FontAwesomeIcon icon={faArrowRight} />
                Gemeinschaft und Spaß
              </motion.li>
            </motion.div>
          </motion.div>
        </Section>
      </InView>
    </>
  );
};

export default DetailPersonal;
