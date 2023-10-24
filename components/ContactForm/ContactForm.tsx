import { useState, useRef, useEffect } from "react";
import styles from "./ContactForm.module.scss";
import emailjs from "@emailjs/browser";
import Modal from "@/components/Modal/Modal";
import { motion } from "framer-motion";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Container from "@/components/Container/Container";

const emailJSPublicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;
const emailJSPIdTemplate = process.env.NEXT_PUBLIC_EMAIL_ID_TEMPLATE as string;

const ContactForm = () => {
  const form = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageModal, setMessageModal] = useState("");
  const [isVisibleModal, setIsVisibleModal] = useState(true);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    form.current &&
      emailjs
        .sendForm(
          "service_5h5mqn9",
          emailJSPIdTemplate,
          form.current,
          emailJSPublicKey
        )
        .then(
          (res) => {
            if (res.status === 200) {
              setMessageModal("Message correctement envoyé");
              setIsVisibleModal(true);
              setMessage("");
              setEmail("");
            }
          },
          (err) => {
            setMessageModal("Problème lors de l'envoi du message");
            setIsVisibleModal(true);
          }
        );
  };
  return (
    <div className={styles.contactForm}>
      <Container margin="isMedium">
        <h1>Contactez moi</h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className={styles.contactForm__infosAndform}>
            <div className={styles.contactForm__infos}>
              <p className={styles.contactForm__infos__info}>
                <MdOutlineMarkEmailRead />
                En envoyant un email :
                <a
                  href="mailto:remythiebaut52@gmail.com"
                  className={styles.contactForm__infos__info__mail}
                >
                  Cliquez ici
                </a>
              </p>
            </div>
            <div className={styles.contactForm__formContainer}>
              <h2>Formulaire de contact</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className={styles.inputAndLabel}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    placeholder="Votre Email..."
                  />
                </div>
                <div className={styles.inputAndLabel}>
                  <label>Message</label>
                  <textarea
                    name="message"
                    className={styles.input}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Votre message..."
                  />
                </div>
                <input
                  type="submit"
                  value="Envoyer"
                  className={styles.submitBtn}
                />
              </form>
            </div>
          </div>
        </motion.div>
        <Modal
          message={messageModal}
          setMessageModal={setMessageModal}
          action={() => setIsVisibleModal(false)}
        />
      </Container>
    </div>
  );
};

export default ContactForm;
