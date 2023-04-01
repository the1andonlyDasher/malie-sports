import React, { useEffect, useRef, useState } from "react";
import { useAnimationControls, motion, useInView,  } from "framer-motion";
import emailjs from "@emailjs/browser";


const ContactForm = ({ title, text, sectionName, id }) => {
  const form = useRef()
  const controlsForm = useAnimationControls();
  const messageControls = useAnimationControls();
  const inView = useInView(form, { once: true, margin: "0px 100px 200px 0px" });

  const formVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const messageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, display: "flex" },
    exit: { opacity: 0 },
  };
  const sequence = async () => {
    await controlsForm.start("exit");
    return await messageControls.start("animate");
  };

  const [status, setStatus] = useState("Abschicken");
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sendet...");
    emailjs
      .sendForm(
        "service_svvit4h",
        "template_t5ebzez",
        form.current,
        "lPNDYXO-4WREGEgyS"
      )
      .then(
        (result) => {
          setStatus("Versandt!");
          setTimeout(() => {
            setStatus("Abschicken");
          }, 2000);
          sequence();
        },
        (error) => {
          setStatus("Ups...");
          alert("Konnte Nachricht nicht versenden...");
        }
      );
  };

  useEffect(() => {
    if (inView) {
      controlsForm.start("animate");
    }
  }, [inView, formVariants]);

  return (
    <>
    <motion.div
    className="thanks__message"
    variants={messageVariants}
    initial="initial"
    animate={messageControls}
    exit="exit"
  >
    <h4>Vielen Dank!</h4>
    <h3>Wir werden Ihre Anfrage bearbeiten und Sie kontaktieren.</h3>
  </motion.div>
  <motion.form
    ref={form}
    onSubmit={sendEmail}
    variants={formVariants}
    initial="initial"
    animate={controlsForm}
    exit="exit"
    transition={{ ease:"easeIn", duration: 1, delay: 0.5}}
  >
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" required />
    </div>
    <div>
      <label htmlFor="email">E-Mail:</label>
      <input
        type="email"
        id="email"
        required
        aria-describedby="emailHelp"
      />
    </div>
    <div>
      <label htmlFor="message">Nachricht:</label>
      <textarea id="message" required rows="5" />
    </div>
    <button className="btn btn__primary btn__medium" type="submit">
    {status}
      </button>
  </motion.form>
</>
  );
};

export default ContactForm;
