import Navbar from "@/components/Nav/navbar";
import Section from "@/components/section";
import Hero from "@/components/Hero";
import CardList from "@/components/CardList";
import Card from "@/components/Card";
import HeroImage from "@/components/HeroImage";
import personal_svg from "../../public/images/personal_o.svg";
import freundinnen_svg from "../../public/images/freundinnen_o.svg";
import events_svg from "../../public/images/events_o.svg";
import { useEffect, useState } from "react";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";
import FooterLink from "@/components/footer/footerLink";
import { motion, useAnimationControls } from "framer-motion";
import BlobBg from "@/components/BlobBg";
import { InView, useInView as useView } from "react-intersection-observer";
import logo from "../../public/images/malie-Logo.svg";


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
  


  },[inView, first, controls, video_controls]);



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
            <track kind="captions" ></track>
            <source src="/videos/video.mp4" type="video/mp4"  />
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
        rootMargin="100px 0px 100px 0px"
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
          <Section ref={ref} sectionName="home" id="home">
            <Hero />
          </Section>
        </InView>
        <InView
        threshold={0.3}
          rootMargin="100px 0px 100px 0px"
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
                text="Du bekommst eine individuelle Betreuung und Unterstützung bei deinem Training zu Hause oder im Park - ganz ohne dein Kind in die Betreuung geben zu müssen. Du sparst Zeit und Aufwand für die Anfahrt zum Fitnessstudio, hast mehr Privatsphäre und Komfort und erreichst deine Fitnessziele mit meinem persönlichen Trainingsprogramm.
                Kontaktiere mich jetzt für effektives und flexibles Training, um dich wieder fit und gesund zu fühlen. 
                "
                image={personal_svg}
                alt="Symbol für das Personal Training"
                btn_target={"/personalTraining"}
              />
              <Card
                title="Freundinnen"
                subtitle="Training"
                subtext="Gemeinsam stark - Für mehr Energie, Fitness und Spaß am
          Leben!"
                text="Als deine Personal Trainerin biete ich das Freundinnen Training an, das speziell auf dich und deine Freundin zugeschnitten ist. Eure Kinder können selbstverständlich dabei sein. Wir werden gemeinsam ein effektives Workout absolvieren, das auf eure individuellen Bedürfnisse und Ziele abgestimmt ist und bei dir zu Hause oder im nahegelegenen Park stattfinden kann. Das Training ist kosteneffizient und ihr könnt euch gegenseitig motivieren und unterstützen. Meldet euch jetzt an und startet gemeinsam eure Fitnessreise!"
                image={freundinnen_svg}
                alt="Symbol für das Personal Training"
                btn_target="/freundinnenTraining"
              />
              <Card
                title="Event"
                subtitle=""
                subtext="Unvergessliche Momente für dein Event!"
                text="Willkommen bei meinem Sportevent-Angebot für Frauen! Hier gibt's Action, Teamwork und jede Menge Spaß für deine private Feier, Teambuilding-Event oder Firmenveranstaltung. Mit Hula Hoop Fitness als Highlight können Frauen jeden Alters ihre Moves zeigen und dabei den ganzen Körper trainieren. Als erfahrene Trainerin sorge ich dafür, dass jede Teilnehmerin auf ihre Kosten kommt und sich wie eine Powerfrau fühlt. Meine Sportevents sind auch super für Teambuilding geeignet und lassen das Team noch enger zusammenwachsen. Los geht's - lass uns dein perfektes Sportevent für Frauen planen!"
                image={events_svg}
                alt="Symbol für das Personal Training"
                btn_target="/events"
              />
            </CardList>
          </Section>
        </InView>
        <InView
        threshold={0.3}
        rootMargin="100px 0px 100px 0px"
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
              image={"/images/malie.webp"}
              firstTitle="Hi, ich bin Saskia!"
              alternativeSub="Trainerin für Mütter Hula Hoop Trainerin und Personal Coach"
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
        rootMargin="100px 0px 100px 0px"
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
