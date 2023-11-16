import { Accordion, AccordionTab } from "primereact/accordion";
import styles from "./FAQ.module.scss";
import Container from "@/components/Container/Container";
import AnimationLayout from "@/components/Layout/AnimationLayout";

const FAQ = () => {
  return (
    <Container margin="isHuge">
      <div className={styles.faq}>
        <AnimationLayout>
          <Accordion>
            <AccordionTab header={<h2>Pourquoi créer un site internet ?</h2>}>
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
            </AccordionTab>
            <AccordionTab
              header={
                <h2>
                  Pourquoi faire appel à un professionnel pour la création de
                  votre site web ?
                </h2>
              }
            >
              <p className={styles.text}>
                <strong>Responsive design :</strong> Un professionnel saura
                créer un site accessible depuis une variété d&apos;appareils, y
                compris les smartphones et les tablettes, offrant ainsi une
                expérience utilisateur optimale.
              </p>
              <p className={styles.text}>
                <strong>Référencement optimal :</strong> Un professionnel saura
                optimiser votre site, améliorant ainsi votre classement dans les
                résultats de recherche comme Google.
              </p>
              <p className={styles.text}>
                <strong>Conception esthétique :</strong> Un professionnel de la
                conception saura créer une interface utilisateur agréable
                attrayante et fonctionnelle pour les visiteurs.
              </p>
              <p className={styles.text}>
                <strong>Sécurité et fiabilité :</strong> Un professionnel saura
                mettre en place des mesures de sécurité robustes pour protéger
                votre site contre les menaces potentielles.
              </p>
            </AccordionTab>
            <AccordionTab header={<h2>Comment créer un site internet ?</h2>}>
              <p className={styles.text}>
                <strong>Définissez votre objectif :</strong> Créer un site
                internet est une démarche passionnante qui peut servir pour une
                entreprise, un blog personnel, ou un projet artistique.
              </p>
              <p className={styles.text}>
                <strong>Choisissez votre plateforme :</strong> Contactez un
                professionnel à Pont-à-Mousson afin de concevoir le contenu et
                la structure et de choisir la plateforme la mieux adaptée à vos
                besoins.
              </p>
              <p className={styles.text}>
                <strong>Créez votre site :</strong> Choisissez le design, les
                couleurs, les logos, les effets, l&apos;architecture et le
                contenu afin de rendre votre site internet élégant, dynamique et
                optimisé pour le référencement.
              </p>

              <p className={styles.text}>
                <strong>Mettre en ligne :</strong> Une fois la conception
                validée, la mise en ligne pourra s&apos;effectuer et vous
                pourrez profiter de votre site vitrine pour bénéficier
                d&apos;une meilleure exposition.
              </p>
            </AccordionTab>
          </Accordion>
        </AnimationLayout>
      </div>
    </Container>
  );
};

export default FAQ;
