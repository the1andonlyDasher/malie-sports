import React, { useRef } from "react";
import { NavItem } from "@/components/Nav/NavItemDesktop";
import Navigation from "@/components/Nav/Navigation";
import MobileNav from "@/components/Nav/MobileNav";
import { NavItem as Mnav} from "@/components/Nav/NavItemMobile";
import logo from "../../public/images/Logo-png-min.png";
import Navbar from "@/components/Nav/navbar";
import Section from "@/components/section";
import MainWrapper from "@/components/mainWrapper";
import BlobBg from "@/components/BlobBg";
import { motion, useAnimationControls } from "framer-motion";


const blob_variants = {
  hidden: { clipPath: "circle(0% at 15% 51%)" },
  exit: { clipPath: "circle(0% at 15% 51%)",
 },
 home: {
  clipPath: "circle(50% at 15% 51%)",
},
  training:{ clipPath: "circle(70% at 50% 0%)"},
  about:{clipPath: "circle(84% at 100% 50%)"},
  contact:{clipPath: "circle(70% at 20% 20%)"},
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
        }}>
        </motion.div>
        <Section header="Personal training" text={"personalText"}></Section>
        </MainWrapper>

    </>
  );
};

export default DetailPersonal;
