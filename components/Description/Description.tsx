"use client";
import Cards from "./Cards/Cards";
import Container from "../Container/Container";
import styles from "./Description.module.scss";
import { motion } from "framer-motion";
import cx from "classnames";
import TextHighlighted from "../TextHighlighted/TextHighlighted";

const Description = () => {
  return (
    <>
      <div className={cx(styles.descriptionContent, "descriptionContent")}>
        <Container margin="isHuge">
          <TextHighlighted
            text="Aujourd'hui, la création d'un site internet est devenue
              une étape cruciale pour toute entreprise désireuse de prospérer.
              Que vous soyez une petite entreprise ou une organisation plus
              importante, un site web bien conçu peut apporter une vrai valeur
              ajoutée à votre projet. C'est pourquoi, je vous propose mon
              expertise afin de créer votre site web et devenir ainsi plus
              visible dans un premier temps sur Pont à mousson."
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h2 className={styles.text}>Pourquoi créer un site internet ?</h2>
            <p className={styles.text}>
              <strong>Visibilité accrue :</strong> Un site offre une visibilité
              24/7, permettant aux clients potentiels de trouver facilement vos
              produits ou services, même en dehors des heures d&apos;ouverture
              de votre entreprise.
            </p>
            <p className={styles.text}>
              <strong>Image de marque :</strong> Un site professionnel renforce
              la crédibilité de votre entreprise et renvoie une image positive à
              vos visiteurs.
            </p>
            <p className={styles.text}>
              <strong>Accessibilité :</strong> Les consommateurs
              d&apos;aujourd&apos;hui recherchent souvent des informations en
              ligne avant de prendre une décision d&apos;achat. Un site web
              permet à votre public de trouver rapidement les informations dont
              il a besoin.
            </p>
            <p className={styles.text}>
              <strong>Élargissement de la clientèle :</strong> Un site internet
              permet d&apos;atteindre un public plus large, que ce soit à
              Pont-à-Mousson ou au-delà, en offrant un moyen de communication
              universel.{" "}
            </p>
            <h2 className={styles.text}>
              Pourquoi faire appel à un professionnel pour la création de votre
              site web ?
            </h2>
            <p className={styles.text}>
              <strong>Responsive design :</strong> Les sites web doivent être
              accessibles depuis une variété d&apos;appareils, y compris les
              smartphones et les tablettes. Un professionnel saura créer un site
              &quot;responsive&quot;, qui s&apos;adapte à toutes les tailles
              d&apos;écran, offrant ainsi une expérience utilisateur optimale.
              Référencement optimal : Être bien positionné sur les moteurs de
              recherche comme Google est essentiel pour attirer du trafic
              organique. Un professionnel du référencement saura optimiser votre
              site pour les mots-clés pertinents, améliorant ainsi votre
              classement dans les résultats de recherche.{" "}
            </p>
            <p className={styles.text}>
              <strong>Conception esthétique :</strong> Un site bien conçu est
              plus attrayant pour les visiteurs. Un professionnel de la
              conception saura créer une interface utilisateur agréable et
              fonctionnelle.{" "}
            </p>
            <p className={styles.text}>
              <strong>Sécurité et fiabilité :</strong> La sécurité en ligne est
              essentielle. Un professionnel saura mettre en place des mesures de
              sécurité robustes pour protéger votre site contre les menaces
              potentielles.
            </p>
          </motion.div>
          <TextHighlighted text="La création d'un site internet est un investissement essentiel pour votre entreprise. Pour garantir son succès, il est recommandé de faire appel à un professionnel qui peut créer un site responsive, bien référencé et esthétiquement attrayant. Cela vous permettra de maximiser votre visibilité en ligne. Ne sous-estimez pas le pouvoir d'un site web bien conçu pour stimuler votre entreprise à Pont-à-Mousson." />
        </Container>
      </div>
      <Cards />
    </>
  );
};

export default Description;
