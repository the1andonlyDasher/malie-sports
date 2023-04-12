import Section from "@/components/section";
import React from "react";
import Navbar from "@/components/Nav/navbar";
import BlobBg from "@/components/BlobBg";
import { motion } from "framer-motion";
import Footer from "@/components/footer/Footer";
import FooterLink from "@/components/footer/footerLink";
import logo from "../../public/images/malie-Logo.svg";

const header_variants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { type: "spring", stiffness: 100, duration: 0.5, delay: 1.25 },
  },
  exit: {
    opacity: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.5 },
  },
};


const Agb = () => {
  return (
    <>
      <Navbar logo={logo} alt="Logo von Malie Sports" />
      <BlobBg />
      <Section header="Impressum" text="">
        <motion.div style={{ width: "100%" }} variants={header_variants}>
          <motion.h3>Saskia Kristin Kracke</motion.h3>
          <motion.p>
            Adresse aus Datenschutzgründen (Pirvate Adresse) unter der
            angegebenen E-Mail abrufbar
          </motion.p>
          <motion.p>Kontakt:</motion.p>

          <motion.p>E-Mail: saskia@malie-sports.de</motion.p>
          <motion.p>Mobil: 0170 1824465</motion.p>
          <motion.p>Inhaltlich verantwortlich gemäß § 5 TMG</motion.p>
        </motion.div>
      </Section>
      <Footer footerText="Malie © 2023">
          <FooterLink linkName="AGB" target="/agb"/>
          <FooterLink linkName="Datenschutz" target="datenschutz"/>
        </Footer>
    </>
  );
};

export default Agb;
