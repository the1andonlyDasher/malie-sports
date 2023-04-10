import Section from "@/components/section";
import React from "react";
import Navbar from "@/components/Nav/navbar";
import BlobBg from "@/components/BlobBg";
import { motion } from "framer-motion";
import Footer from "@/components/footer/Footer";
import FooterLink from "@/components/footer/footerLink";

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

const logo = require("../../public/images/Logo-png-min.png");

const Agb = () => {
  return (
    <>
      <Navbar logo={logo} alt="Logo von Malie Sports" />
      <BlobBg/>
      <Section header="       Datenschutz" text="">
        <motion.div style={{width: "100%"}} variants={header_variants}>
        <motion.h3>Ich respektiere Ihre Daten!</motion.h3>
        <motion.p>

Das Vertrauen aller Besucher und Kunden, die Sicherheit Ihrer Daten und der Schutz Ihrer Privatsphäre sind für mich von zentraler Bedeutung. Ihre personenbezogenen Daten werden von mir daher gemäß den gültigen gesetzlichen Datenschutzvorschriften behandelt. Personenbezogene Daten sind Informationen, die dazu genutzt werden können, um Ihre Identität zu erfahren, wie beispielsweise Ihr richtiger Name, Ihre Adresse oder Ihre Telefonnummer. 
Nachfolgend möchte ich Ihnen näher erläutern, welche Daten ich wann und zu welchem Zweck verarbeite. Es wird erklärt, wie meine angebotenen Dienste arbeiten und wie hierbei der Schutz Ihrer personenbezogenen Daten gewährleistet wird.
Rechtsgrundlage für die Verarbeitung personenbezogener Daten
Sofern ich für Verarbeitungsprozesse personenbezogener Daten eine Einwilligung der betroffenen Person einhole, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage.
Für die Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen Vertragspartei die betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.
Sofern eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.
Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Datenverarbeitung.
Datenlöschung und Speicherdauer
Die personenbezogenen Daten der betroffenen Person werden gelöscht, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch europäische oder nationale Gesetze oder sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine durch die genannten Vorschriften vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der Daten für einen Vertragsabschluss oder eine Vertragserfüllung besteht.
</motion.p>
<motion.h3>Ihre Rechte </motion.h3>
<motion.p>
Sie haben ein Recht auf unentgeltliche Auskunft über die bei uns zu Ihrer Person gespeicherten Daten sowie ggf. ein Recht auf Berichtigung, Einschränkung der Verarbeitung oder Löschung dieser Daten. Ebenfalls haben Sie das Recht auf Datenübertragbarkeit. Schließlich haben Sie auch das Recht, sich über die Verarbeitung Ihrer persönlichen Daten durch uns bei der Datenschutz-Aufsichtsbehörde zu beschweren. 
Ich weisen Sie zudem darauf hin, dass Sie der künftigen Verarbeitung Ihrer personenbezogenen Daten entsprechend den gesetzlichen Vorgaben gem. Art. 21 DSGVO zu jeder Zeit widersprechen können. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.
</motion.p>
<motion.h3>
Erteilung von Auskünften
</motion.h3>
<motion.p>
Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, für Auskünfte, für die Berichtigung, Sperrung oder Löschung von Daten, sowie zum Widerruf ggf. erteilter Einwilligungen oder zum Widerspruch gegen eine bestimmte Datenverwendung wenden Sie sich bitte unter Verwendung der folgenden E-Mail-Adresse an uns:
saskia@malie.de
        </motion.p>
        </motion.div>
      </Section>
      <Footer footerText="Malie © 2023">
          <FooterLink linkName="Impressum" target="/impressum"/>
          <FooterLink linkName="AGB" target="/agb"/>
        </Footer>
    </>
  );
};

export default Agb;
