"use client";
import Cards from "./Cards/Cards";
import styles from "./Description.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import cx from "classnames";
import TextHighlighted from "../TextHighlighted/TextHighlighted";
import graph from "@/assets/description/graph.jpg";
import responsive from "@/assets/description/responsive.jpg";

const Description = () => {
  return (
    <>
      <div className={cx(styles.descriptionContent, "descriptionContent")}>
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
          <div className={styles.descriptionModuleContainer}>
            <div className={styles.descriptionModulePicture}>
              <Image
                src={graph}
                alt={"Graphique montant en flèche"}
                title={"Graphique montant en flèche"}
                className={styles.image}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.descriptionModuleText}>
              <h2 className={styles.text}>Pourquoi créer un site internet ?</h2>
              <p className={styles.text}>
                <strong>Visibilité accrue :</strong> Un site offre une
                visibilité 24/7, permettant aux clients potentiels de vous
                trouver facilement.
              </p>
              <p className={styles.text}>
                <strong>Image de marque :</strong> Un site professionnel
                renforce la crédibilité de votre entreprise et renvoie une image
                positive à vos visiteurs.
              </p>
              <p className={styles.text}>
                <strong>Accessibilité :</strong> Un site web permet à votre
                public de trouver rapidement les informations dont il a besoin.
              </p>
              <p className={styles.text}>
                <strong>Élargissement de la clientèle :</strong> Un site
                internet permet d&apos;atteindre un public plus large, que ce
                soit à Pont-à-Mousson ou au-delà, en offrant un moyen de
                communication universel.{" "}
              </p>
            </div>
          </div>
          <div className={styles.descriptionModuleContainer}>
            <div className={styles.descriptionModulePicture}>
              <Image
                src={responsive}
                alt={"Ordinateur, tablette et mobile sur un bureau"}
                title={"Ordinateur, tablette et mobile sur un bureau"}
                className={styles.image}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.descriptionModuleText}>
              <h2 className={styles.text}>
                Pourquoi faire appel à un professionnel pour la création de
                votre site web ?
              </h2>
              <p className={styles.text}>
                <strong>Responsive design :</strong> Un professionnel saura
                créer un site accessible depuis une variété d&apos;appareils, y
                compris les smartphones et les tablettes, offrant ainsi une
                expérience utilisateur optimale.
                <p className={styles.text}>
                  <strong>Référencement optimal :</strong>Un professionnel saura
                  optimiser votre site, améliorant ainsi votre classement dans
                  les résultats de recherche comme Google.
                </p>
              </p>
              <p className={styles.text}>
                <strong>Conception esthétique :</strong>Un professionnel de la
                conception saura créer une interface utilisateur agréable
                attrayante et fonctionnelle pour les visiteurs.
              </p>
              <p className={styles.text}>
                <strong>Sécurité et fiabilité :</strong> Un professionnel saura
                mettre en place des mesures de sécurité robustes pour protéger
                votre site contre les menaces potentielles.
              </p>
            </div>
          </div>
        </motion.div>
        <TextHighlighted text="La création d'un site internet est un investissement essentiel pour votre entreprise. Pour garantir son succès, il est recommandé de faire appel à un professionnel qui peut créer un site responsive, bien référencé et esthétiquement attrayant. Cela vous permettra de maximiser votre visibilité en ligne. Ne sous-estimez pas le pouvoir d'un site web bien conçu pour stimuler votre entreprise à Pont-à-Mousson." />
      </div>
      <Cards />
    </>
  );
};

export default Description;
