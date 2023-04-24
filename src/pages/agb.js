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
      <Section header="Allgemeine Geschäftsbedingungen" text="">
        <motion.div style={{ width: "100%" }} variants={header_variants}>
          <motion.h3>
            1. Aktuelles / Änderung von Angebot und Öffnungszeiten
          </motion.h3>
          <motion.p>
            Aufgrund von behördlichen Maßnahmen (ggf. durch eine Pandemie) kann
            es zu Einschränkungen kommen, unter anderem zu einer behördlich
            angeordneten Schließung des Betriebs. In diesem Fall können bereits
            erworbene Kurskarten für Onlinekurse genutzt werden. Eine
            Stornierung von bereits gebuchten Freundinnen-Training, Personal
            Training oder Event-Terminen ist nicht möglich und eine Erstattung
            des Kaufpreises ist ausgeschlossen. Es liegt im Ermessen von Saskia
            Kristin Kracke Änderungen im Angebot, an Zeiten und Preisen
            vorzunehmen. Für Gruppenkurse gilt: In den Ferien und an
            gesetzlichen Feiertagen finden keine regulären Termine statt. Ein
            Anspruch auf Ersatz der hierdurch ausgefallenen Stunden besteht
            nicht, da die Ferien bereits in der Berechnung der Beiträge
            berücksichtigt sind. Gruppenkurse finden ab einer
            Mindestteilnehmerzahl von 3 Teilnehmerinnen statt. Sollten Termine
            nicht stattfinden, behält die Buchung ihre Gültigkeit. Sollten durch
            Krankheit oder anderweitige Verhinderungen von Saskia Kristin Kracke
            Termine entfallen, sind die Teilnehmerinnen zu einer Kürzung oder
            Rückforderung der Teilnahmegebühren nicht berechtigt. Sollten
            Termine ausfallen, werden die Buchungen entsprechend um den
            ausgefallenen Zeitraum automatisch verlängert.
          </motion.p>
          <motion.h3>
            2. Anmeldung, Abmeldung / Stornierung von Buchungen
          </motion.h3>
          <motion.p>
            Die Buchungen für Freundinnen-Training, Personal Training oder
            Events erfolgen über das Kontaktformular auf malie-sports.de oder
            per E-Mail an saskia@malie-sports.de. Mit der Buchung werden die
            Allgemeinen Geschäftsbedingungen von Saskia Kristin Kracke
            akzeptiert. Rechtzeitig abgesagte Termine (bis 24 Stunden vor dem
            Terminbeginn) können nachgeholt werden. Fehlzeiten können (sofern
            noch Platz ist) zeitnah in flexiblen Terminen ausgeglichen werden.
            Durch Fehlzeiten entsteht keine Befreiung von der Zahlungspflicht.
            Nicht im Gültigkeitszeitraum in Anspruch genommene Stunden können
            nicht zu einem späteren Zeitpunkt nachgeholt werden. Eine
            Verrechnung oder Barauszahlung von nicht in Anspruch genommenen
            Stunden erfolgt nicht. Alle Angebote sind auf der Homepage
            www.malie-sports.de ersichtlich. Änderungen und Irrtümer
            vorbehalten. Nach der Buchung erhalten Sie eine Bestätigung per
            E-Mail. Die Buchung ist somit verbindlich. Buchungen sind nicht
            übertragbar.
          </motion.p>
          <motion.h3>3. Gutschein</motion.h3>
          <motion.p>
            Gutscheine für Freundinnen-Training, Personal Training oder Events
            können online oder persönlich erworben werden. Eine Rückerstattung
            oder Stornierung eines bereits erworbenen Gutscheins ist nicht
            möglich. Es besteht kein Anspruch auf Barauszahlung.
          </motion.p>
          <motion.h3>4. Haftungsausschluss</motion.h3>
          <motion.p>
            Der Unterricht wird von der ausgebildeten Lehrkraft nach bestem
            Wissen und Gewissen durchgeführt. Mit der Buchung des Kurses erklärt
            der Teilnehmer, den durch die Teilnahme entstehenden körperlichen
            Anforderungen gewachsen zu sein. Es wird empfohlen, sich vor der
            Teilnahme an den Kursen beim Hausarzt/Frauenarzt die
            Sporttauglichkeit bescheinigen zu lassen. Die Versicherung ist Sache
            der Teilnehmerinnen. Saskia Kristin Kracke übernimmt keine Haftung
            für Unfälle.
          </motion.p>
          <motion.h3>5. Salvatorische Klausel</motion.h3>
          <motion.p>
            Sollten eine oder mehrere Bestimmungen dieser Allgemeinen
            Geschäftsbedingungen unwirksam sein oder werden, so bleibt die
            Wirksamkeit der übrigen Bestimmungen davon unberührt. Anstelle der
            unwirksamen Bestimmung tritt die gesetzliche Regelung. Das Gleiche
            gilt im Falle einer Regelungslücke.
          </motion.p>
          <motion.h3>6. Widerrufsrecht</motion.h3>
          <motion.p>
            Da es sich bei den Kursen um Dienstleistungen handelt, besteht kein
            Widerrufsrecht gemäß §312g Abs. 2 Nr. 9 BGB.
          </motion.p>
          <motion.h3>7. Gerichtsstand und anwendbares Recht</motion.h3>
          <motion.p>
            Es gilt ausschließlich das Recht der Bundesrepublik Deutschland.
            Gerichtsstand für alle Streitigkeiten zwischen dem Kunden und Saskia
            Kristin Kracke ist der Sitz des Anbieters, sofern der Kunde
            Vollkaufmann, juristische Person des öffentlichen Rechts oder
            öffentlich-rechtliches Sondervermögen ist oder keinen allgemeinen
            Gerichtsstand in Deutschland hat.
          </motion.p>
          <motion.h3>8. Streitschlichtung</motion.h3>
          <motion.p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung bereit, die Sie unter
            http://ec.europa.eu/consumers/odr/ finden. Verbraucher haben die
            Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten
            zu nutzen.
          </motion.p>
        </motion.div>
      </Section>
      <Footer footerText="Malie © 2023">
        <FooterLink linkName="Impressum" target="/impressum" />
        <FooterLink linkName="Datenschutz" target="datenschutz" />
      </Footer>
    </>
  );
};

export default Agb;
