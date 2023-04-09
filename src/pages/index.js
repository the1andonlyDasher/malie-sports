import Image from "next/image";
import Navbar from "@/components/Nav/navbar";
import Section from "@/components/section";
import Hero from "@/components/Hero";
import CardList from "@/components/CardList";
import Card from "@/components/Card";
import HeroImage from "@/components/HeroImage";
import personal_svg from "../../public/images/personal_o.svg";
import freundinnen_svg from "../../public/images/freundinnen_o.svg";
import events_svg from "../../public/images/events_o.svg";
import malie from "../../public/images/5f8312169ee77-_1_.webp";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";
import FooterLink from "@/components/footer/footerLink";
import { motion, useInView, useAnimationControls } from "framer-motion";
import BlobBg from "@/components/BlobBg";
import { InView, useInView as useView } from "react-intersection-observer";
const logo = require("../../public/images/Logo-png-min.png");

const blob__mobile_variants = {
  hidden: { clipPath: "circle(0% at 15% 51%)" },
  exit: { clipPath: "circle(0% at 15% 51%)" },
  home: {clipPath: "circle(60% at 50% 90%)"},
  training: { clipPath: "circle(70% at 50% 0%)" },
  about: { clipPath: "circle(84% at 100% 50%)" },
  contact: { clipPath: "circle(70% at 20% 20%)" },
}

const blob_variants = {
  hidden: { clipPath: "circle(0% at 15% 51%)" },
  exit: { clipPath: "circle(0% at 15% 51%)" },
  home: {clipPath: "circle(50% at 15% 51%)"},
  training: { clipPath: "circle(70% at 50% 0%)" },
  about: { clipPath: "circle(84% at 100% 50%)" },
  contact: { clipPath: "circle(70% at 20% 20%)" },
};

const video_variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition:{delay: 1} },
};




export default function Home() {
  const controls = useAnimationControls();
  const video_controls = useAnimationControls();
  const [first, setFirst] = useState(true);
  const {ref, inView, entry} = useView({
    threshold: 0.5
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get the hash from the url
      const hashId = window.location.hash;
      if (hashId) {
        return
      } else {
        if(inView){
          setTimeout(() => {
            controls.start("home");
            video_controls.start("visible")
          }, 1000);
        }
        setFirst(false)
      }
    }
  


  },[inView, first]);



  return (
    <>
        <Navbar logo={logo} alt="Logo von Malie Sports" />
        <BlobBg>
          <motion.video
            variants={video_variants}
            initial="hidden"
            animate={video_controls}
            className="video"
            playsInline
            muted
            autoPlay
            loop
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </motion.video>
        </BlobBg>
        <motion.div
          className="blob__mobile"
          variants={blob__mobile_variants}
          initial="hidden"
          animate={controls}
          exit="exit"
          transition={{
            duration: 0.75,
            type: "tween",
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="blob"
          variants={blob_variants}
          initial="hidden"
          animate={controls}
          exit="exit"
          transition={{
            duration: 0.75,
            type: "tween",
            ease: "easeInOut",
          }}
        ></motion.div>
        <InView
        threshold={0.3}
          rootMargin="0px 100px -50px 0px"
          as="div"
          onChange={(inView, entry) =>{
            if(!first){
            inView
              ? (controls.start(
                `${entry.target.firstChild.getAttribute("data-section-name")}`
              ),
              video_controls.start("visible"))
            : null
        }}}
        >
          <Section ref={ref} sectionName="home">
            <Hero />
          </Section>
        </InView>
        <InView
        threshold={0.3}
          rootMargin="0px 100px -50px 0px"
          as="div"
          onChange={(inView, entry) =>
            inView
              ? (controls.start(
                  `${entry.target.firstChild.getAttribute("data-section-name")}`
                ),
                video_controls.start("hidden"))
              : null
          }
        >
          <Section id="cards" header="Training" sectionName="training">
            <CardList>
              <Card
                title="Personal"
                subtitle="Training"
                subtext="Werde zur besten Version von dir!"
                text="Wir bieten Ihnen einen einzigartigen Webauftritt. Unsere Designansätze sind nicht nur nach
          grundlegenden Prinzipien ausgerichtet, sondern orientieren sich auch immer an den neusten Trends."
                image={personal_svg}
                alt="Symbol für das Personal Training"
                btn_target={"/personalTraining"}
              />
              <Card
                title="Freundinnen"
                subtitle="Training"
                subtext="Gemeinsam stark - Für mehr Energie, Fitness und Spaß am
          Leben!"
                text="Wir bieten Ihnen einen einzigartigen Webauftritt. Unsere Designansätze sind nicht nur nach
          grundlegenden Prinzipien ausgerichtet, sondern orientieren sich auch immer an den neusten Trends."
                image={freundinnen_svg}
                alt="Symbol für das Personal Training"
                btn_target="/freundinnenTraining"
              />
              <Card
                title="Event"
                subtitle=""
                subtext="Unvergessliche Momente für dein Event!"
                text="Wir bieten Ihnen einen einzigartigen Webauftritt. Unsere Designansätze sind nicht nur nach
          grundlegenden Prinzipien ausgerichtet, sondern orientieren sich auch immer an den neusten Trends."
                image={events_svg}
                alt="Symbol für das Personal Training"
                btn_target="/events"
              />
            </CardList>
          </Section>
        </InView>
        <InView
        threshold={0.3}
          rootMargin="0px 100px -50px 0px"
          as="div"
          onChange={(inView, entry) =>
            inView
            ? (controls.start(
              `${entry.target.firstChild.getAttribute("data-section-name")}`
            ),
            video_controls.start("hidden"))
          : null
      }
        >
          <Section id="about" sectionName="about">
            <HeroImage
              altText="Foto von Malie"
              image={malie}
              firstTitle="Hi, ich bin Saskia!"
              alternativeSub="Trainerin für Mütter Hulla Hoop Trainerin und Personal Coach"
              text="Hallo, ich bin Saskia - Personal Coach, Trainerin für Mütter und Frauen sowie Hula Hoop Trainerin und Beckenbodenexpertin. Als Mama von zwei großartigen Jungs bin ich sport- und naturverliebt und auch als Partnerin, Freundin und Liebhaberin stehe ich mitten im Leben.
              Der Sport begleitet mich bereits seit meinem dritten Lebensjahr. Von Kunstturnen über Prellball bis hin zum Rhönrad habe ich mich immer für ungewöhnliche Sportarten begeistert. Auch heute noch ist der Sport ein wichtiger Bestandteil meines Lebens.
              Nach der Geburt meines ersten Kindes war es mir besonders wichtig, mich wieder wohl in meinem Körper zu fühlen und zu meiner starken Mitte zurückzufinden. Als ich das für mich erreicht hatte, wollte ich auch anderen Müttern und Frauen auf ihrem Weg zu einem positiven Körpergefühl begleiten.
              Seit 2020 arbeite ich mit meinem Herzensprojekt Malie als Prä- und Postnatale Fitnesstrainerin, Hula Hoop Trainerin, Personal Coach und Ernährungsberaterin selbstständig. Es erfüllt mich mit großer Freude, andere Frauen auf ihrem Weg zu ihrer ganz persönlichen Stärke zu begleiten.
              Ich freue mich darauf, auch dich auf deinem Weg zu begleiten!
              "
            />
          </Section>
        </InView>
        <InView
        threshold={0.3}
          rootMargin="0px 100px -50px 0px"
          as="div"
          onChange={(inView, entry) =>
            inView
            ? (controls.start(
              `${entry.target.firstChild.getAttribute("data-section-name")}`
            ),
            video_controls.start("hidden"))
          : null
      }
        >
          <Section
            id="contact"
            sectionName="contact"
            header={"Kontakt"}
            text="Du möchtest einen Kurs buchen, oder hast eine Frage? Kontaktiere
            mich hier oder schreib eine E-Mail an kontakt@malie-sports.de"
          >
            <ContactForm />
          </Section>
        </InView>
        <Footer footerText="Malie © 2023">
          <FooterLink linkName="Impressum" target="/impressum"/>
          <FooterLink linkName="AGB" target="/agb"/>
          <FooterLink linkName="Datenschutz" target="datenschutz"/>
        </Footer>
    </>
  );
}
