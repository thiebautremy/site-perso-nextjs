import Container from "@/components/Container/Container";
import styles from "./Tarifs.module.scss";
import { motion } from "framer-motion";
import cx from "classnames";
import { useState } from "react";
import Link from "next/link";
import { GiTRexSkull } from "react-icons/gi";
import CTAContainer from "../CTAContainer/CTAContainer";

type TarifCardType = {
  id: number;
  title: string;
  price: string;
  className: string;
  hover: boolean;
  description: string[];
};
const Tarifs = () => {
  const tarifsCardsData: TarifCardType[] = [
    {
      id: 1,
      title: "Formule Starter",
      price: "600 €",
      hover: false,
      className: "",
      description: [
        "Hébergement et nom de domaine en .fr",
        "Un design personnalisé",
        "Page d’accueil, de contact, de présentation",
        "Maintenance de 6 mois",
      ],
    },
    {
      id: 2,
      title: "Formule Pro",
      price: "900 €",
      hover: false,
      className: "",
      description: [
        "Hébergement et nom de domaine en .fr",
        "Un design personnalisé",
        "Page d’accueil, de contact, de présentation",
        "Stratégie de référencement avancé",
        "Maintenance de 12 mois",
      ],
    },
    {
      id: 3,
      title: "Formule Premium",
      price: "A définir",
      hover: false,
      className: "",
      description: ["Développement sur mesure"],
    },
  ];

  const [tarifsCardsState, setTarifsCardsState] =
    useState<TarifCardType[]>(tarifsCardsData);

  const handleMouseEnter = (id: number) => {
    const hasId = tarifsCardsState.some((priceCard) => {
      return priceCard.id === id;
    });

    if (hasId) {
      const cardHover = tarifsCardsState.find((object) => object.id === id);
      if (cardHover !== undefined) {
        const newCardHover = { ...cardHover, hover: true, className: "hover" };
        const newCardsNotHover = tarifsCardsState.filter(
          (card) => card.id !== id
        );
        newCardsNotHover.forEach((object) => {
          object.className = "notHover";
          object.hover = false;
        });
        const newtarifsCardState = [newCardHover, ...newCardsNotHover];
        setTarifsCardsState(newtarifsCardState);
      }
    }
  };

  const handleMouseLeave = () => {
    setTarifsCardsState(tarifsCardsData);
  };

  return (
    <div className={styles.tarifsContainer}>
      <motion.div
        animate={{ x: [250, 0] }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Container margin="isHuge">
          <h1>Tarifs des prestations de Webosaurus</h1>
          <h2>
            Webosaurus, agence web, propose différentes formules de tarifs pour
            répondre aux besoin de tous les budgets {""}
            <strong>Pont-à-Mousson</strong> ?
          </h2>
          <div className={styles.content}>
            <div className={styles.cardsContainer}>
              {tarifsCardsState
                .sort((a, b) => a.id - b.id)
                .map((tarifCard: TarifCardType) => (
                  <div
                    className={cx(styles.card, tarifCard.className)}
                    onMouseEnter={() => handleMouseEnter(tarifCard.id)}
                    onMouseLeave={() => handleMouseLeave()}
                    key={tarifCard.id}
                  >
                    <div className={styles.title}>{tarifCard.title}</div>
                    <p className={styles.price}>{tarifCard.price}</p>
                    <ul className={styles.description}>
                      {tarifCard.description.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Link
                      href={"/contact"}
                      className={cx(
                        `ctaBtn ctaBtnScrolled ${styles.contactBtn}`
                      )}
                    >
                      <span>Me contacter</span>
                    </Link>
                  </div>
                ))}
            </div>
            <ul className={styles.formulasList}>
              <li className={styles.formula}>
                <GiTRexSkull className={styles.TRexSkull} />
                <strong>La formule Starter</strong> est idéale pour les petites
                entreprises ou les particuliers qui souhaitent créer un site
                internet simple et efficace.
              </li>
              <li className={styles.formula}>
                <GiTRexSkull className={styles.TRexSkull} />
                <strong>La formule Pro</strong> est recommandée pour les
                entreprises ou les professionnels qui souhaitent créer un site
                internet plus complet, plus performant et mieux référencé sur
                les moteurs de recherche.
              </li>
              <li className={styles.formula}>
                <GiTRexSkull className={styles.TRexSkull} />
                <strong>La formule Premium</strong> est la solution idéale pour
                les entreprises ou les professionnels qui souhaitent créer un
                site internet haut de gamme et sur mesure.
              </li>
            </ul>
            <h2>Pourquoi choisir Webosaurus ?</h2>
            <p>
              Webosaurus est une agence web qui propose des services de qualité
              à des tarifs abordables. L&apos;agence accompagne ses clients à
              chaque étape du processus de création de site internet, de la
              conception à la maintenance.
            </p>
            <p>
              Les avantages de choisir Webosaurus pour la création de votre site
              internet comprennent :
            </p>
            <ul className={styles.benefitsList}>
              <li className={styles.benefit}>Un design personnalisé</li>
              <li className={styles.benefit}>Un développement sur mesure</li>
              <li className={styles.benefit}>
                Un référencement naturel (SEO) efficace
              </li>
              <li className={styles.benefit}>Une maintenance de qualité</li>
              <li className={styles.benefit}>Un accompagnement personnalisé</li>
            </ul>
          </div>
          <CTAContainer />
        </Container>
      </motion.div>
    </div>
  );
};

export default Tarifs;
