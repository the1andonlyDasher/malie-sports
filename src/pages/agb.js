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
      <BlobBg/>
      <Section header="Allgemeine Geschäftsbedingungen" text="">
        <motion.div style={{width: "100%"}} variants={header_variants}>
        <motion.h3>1. Aktuelles / Änderung von Angebot und Öffnungszeiten​</motion.h3>
        <motion.p>
          Aufgrund der aktuellen Corona Pandemie kann es zu Einschränkungen
          kommen, unter anderem zu einer behördlich angeordneten Schließung des
          Betriebs. In diesem Fall können bereits erworbene Kurskarten für
          Onlinekurse genutzt werden. Eine Stornierung von bereits getätigten
          Kursen ist nicht möglich und eine Erstattung des Kaufpreises ist
          ausgeschlossen. Es liegt im Ermessen von Saskia Kristin Kracke
          Änderungen im Kursplan, an Zeiten und Preisen vorzunehmen. In den
          Ferien und an gesetzlichen Feiertagen finden keine regulären Kurse
          statt. Ein Anspruch auf Ersatz der hierdurch ausgefallenen Stunden
          besteht nicht, da die Ferien bereits in der Berechnung der Beiträge
          berücksichtigt sind. Gruppenkurse finden ab einer
          Mindestteilnehmerzahl von 3 Teilnehmern statt. Sollten Kurse nicht
          stattfinden, behält die Kurskarte ihre Gültigkeit. Sollten durch
          Krankheit oder anderweitige Verhinderungen von Saskia Kristin Kracke
          Kurse entfallen, sind die Teilnehmer zu einer Kürzung oder
          Rückforderung der Teilnahmegebühren nicht berechtigt. Sollten Kurse
          ausfallen, werden die Kurskarten entsprechend um den ausgefallenen
          Zeitraum automatisch verlängert.
        </motion.p>
        <motion.h3>2. Anmeldung, Abmeldung / Stornierung von Kursen</motion.h3>
        <motion.p>
          Die Anmeldungen zu den Kursen erfolgt auf www.malie-sports.de. Mit der
          Anmeldung werden die Allgemeinen Geschäftsbedingungen von Saskia
          Kristin Kracke akzeptiert. Rechtzeitig abgesagte Kurseinheiten (bis 24
          Stunden vor Kursbeginn) können nachgeholt werden. Fehlzeiten können
          (sofern noch Platz ist) zeitnah in flexiblen Stunden ausgeglichen
          werden. Durch Fehlzeiten entsteht keine Befreiung von der
          Zahlungspflicht. Nicht im Gültigkeitszeitraum in Anspruch genommene
          Stunden können nicht zu einem späteren Zeitpunkt nachgeholt werden.
          Eine Verrechnung oder Barauszahlung von nicht in Anspruch genommenen
          Stunden erfolgt nicht. Alle Angebote und Preise sind auf der Homepage
          www.malie-sports.de ersichtlich. Änderungen und Irrtümer vorbehalten.
          Nach der Anmeldung erhalten Sie eine Anmeldebestätigung per E-Mail.
          Die Buchung ist somit verbindlich. Kurskarten sind nicht übertragbar.​
        </motion.p>
        <motion.h3>3. Gutschein</motion.h3>
        <motion.p>
          Kursgutscheine können online oder persönlich erworben werden. Eine
          Rückerstattung oder Stornierung eines bereits erworbenen Gutscheins
          ist nicht möglich. Es besteht kein Anspruch auf Barauszahlung.
        </motion.p>
        <motion.h3>4. Haftungsausschluss</motion.h3>
        <motion.p>
          Der Unterricht wird von der ausgebildeten Lehrkraft nach bestem Wissen
          und Gewissen durchgeführt. Mit der Buchung des Kurses erklärt der
          Teilnehmer, den durch die Teilnahme entstehenden körperlichen
          Anforderungen gewachsen zu sein. Sicherheitshalber wird empfohlen,
          sich vor der Teilnahme an den Kursen beim Hausarzt die
          Sporttauglichkeit bescheinigen zu lassen. Die Versicherung ist Sache
          der Teilnehmer. Saskia Kristin Kracke übernimmt keine Haftung für
          Unfälle oder Diebstahl während des Kursbesuches.
        </motion.p>
        <motion.h3>5. Datenschutzbestimmungen</motion.h3>
        <motion.p>
          Die Teilnehmer werden darauf hingewiesen, dass gem. §33
          Bundesdatenschutzgesetz personenbezogene Daten zu internen
          Bearbeitungszwecken elektronisch gespeichert werden. Die Bestimmungen
          des Bundesdatenschutzgesetzes werden dabei eingehalten. Die Teilnehmer
          erklären sich in diesem Umfang mit der Bearbeitung und Nutzung ihrer
          personenbezogenen Daten einverstanden. Änderungen der Anschrift und
          der Bankverbindung sind Saskia Kristin Kracke unverzüglich
          mitzuteilen.
        </motion.p>
        <motion.h3>6. Salvatorische Klausel</motion.h3>
        <motion.p>
          Sollten eine oder mehrere Bestimmungen dieser Allgemeinen
          Geschäftsbedingungen unwirksam sein oder werden, tritt an die Stelle
          das Gesetz. Die Wirksamkeit der übrigen Bestimmungen wird nicht
          berührt.
        </motion.p>
        </motion.div>
      </Section>
      <Footer footerText="Malie © 2023">
          <FooterLink linkName="Impressum" target="/impressum"/>
          <FooterLink linkName="Datenschutz" target="datenschutz"/>
        </Footer>
    </>
  );
};

export default Agb;
