import Container from "../Container/Container";
import CTAContainer from "./CTAContainer";
import styles from "./Presentation.module.scss";
import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <div className={styles.presentationContainer}>
      <Container margin="isHuge">
        <motion.div
          animate={{ x: [250, 0] }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1>Présentation de Webosaurus</h1>
          <h2>
            Vous cherchez une agence web spécialisée en création de site web à{" "}
            <strong>Pont-à-Mousson</strong> ?
          </h2>
          <div className={styles.content}>
            <p>
              <br></br>J&apos;offre des solutions personnalisées pour la
              conception de sites vitrine, adaptés à vos besoins et à votre
              budget. <br></br>Ma passion est de donner vie à votre présence en
              ligne en créant des sites web esthétiques, intuitifs et
              performants. Que vous soyez une entreprise locale ou un
              particulier, je mettrai en avant votre identité unique.
            </p>
            <p>
              {" "}
              Avoir un site internet c&apos;est bien mais qu&apos;il soit
              visible c&apos;est encore mieux. Je m&apos;engage pour assurer la
              visibilité de votre site via le référencement naturel (SEO), vous
              permettant d&apos;atteindre votre public cible plus facilement.
            </p>
            <p>
              {" "}
              Ma mission est de concevoir des sites web de qualité, optimisés
              pour les moteurs de recherche, et mettre en place une stratégie
              digitale pour renforcer votre présence en ligne. Choisissez une
              agence qui comprend vos besoins et qui excelle dans la création de
              sites web à Pont-à-Mousson. Contactez-moi dès aujourd&apos;hui
              pour démarrer votre projet en ligne !
            </p>
          </div>
          <CTAContainer />
        </motion.div>
      </Container>
    </div>
  );
};

export default Presentation;
