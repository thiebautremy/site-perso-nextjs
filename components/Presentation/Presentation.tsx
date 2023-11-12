import Container from "@/components/Container/Container";
import CTAContainer from "@/components/CTAContainer/CTAContainer";
import styles from "./Presentation.module.scss";
import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <div className={styles.presentationContainer}>
      <motion.div
        animate={{ x: [250, 0] }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Container margin="isHuge">
          <h1>Présentation de Webosaurus</h1>
          <h2>
            Vous cherchez une agence web spécialisée en création de site web à{" "}
            <strong>Pont-à-Mousson</strong> ?
          </h2>
          <div className={styles.content}>
            <h3>Mes compétences</h3>
            <p>
              <br></br>Fort de plusieurs années en tant que développeur web
              j&apos;offre des solutions personnalisées pour la conception de
              sites vitrine, adaptés à vos besoins et à votre budget et ainsi
              promouvoir sur le web votre identité visuelle, vos idées et votre
              marque. <br></br>Ma passion est de donner vie à votre présence en
              ligne en créant des sites web esthétiques, intuitifs et
              performants. Que vous soyez une entreprise locale ou un
              particulier, je mettrai en avant votre identité unique.
            </p>
            <p>
              Créer un site internet demande aujourd&apos;hui beaucoup de
              compétences que j&apos;ai pu acquérir en développement web. La
              création, le design, la conception de logo, le responsive design
              (visuel adapté à toutes les tailles d&apos;écrans), le choix du
              nom de domaine, le référencement naturel (capacité du site à être
              bien placé dans les résultats sur les moteurs de recherche) ainsi
              que l&apos;hébergement sont autant de critères à prendre en compte
              et maitrisé afin de garantir le meilleur produit en tenant en
              compte le budget dédié.
            </p>
            <h3>Mon savoir faire</h3>
            <p>
              {" "}
              Avoir un site internet c&apos;est bien mais qu&apos;il soit
              visible c&apos;est encore mieux. Je m&apos;engage pour assurer la
              visibilité de votre site via le référencement naturel (SEO), vous
              permettant d&apos;atteindre votre public cible plus facilement.{" "}
            </p>
            <p>
              <strong>
                Vous souhaitez pouvoir gérer et modifier vous même votre contenu
                publié ?
              </strong>{" "}
              <br></br>
              <br></br>Alors nous pouvons mettre en place une solution via un
              CMS (Content Management System) afin de vous donner la main sur
              chaque mots présents sur votre site internet.
            </p>
            <p>
              {" "}
              Ma mission est de concevoir des sites web de qualité, optimisés
              pour les moteurs de recherche, et mettre en place une stratégie
              digitale pour renforcer votre présence en ligne. Choisissez une
              agence qui comprend vos besoins et qui excelle dans la création de
              sites web à Pont-à-Mousson. Contactez-moi dès aujourd&apos;hui
              pour démarrer votre projet web !
            </p>
          </div>
        </Container>
        <CTAContainer />
      </motion.div>
    </div>
  );
};

export default Presentation;
