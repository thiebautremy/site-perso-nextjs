import Container from "@/components/Container/Container";
import styles from "./Tarifs.module.scss";
import { motion } from "framer-motion";
import cx from "classnames";
import { useState } from "react";
import Link from "next/link";

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
      title: "Site vitrine",
      price: "500 €",
      hover: false,
      className: "",
      description: [
        "Hébergement et nom de domaine en .fr",
        "Page d’accueil, de contact, de présentation",
        "maintenance de 3 mois",
      ],
    },
    {
      id: 2,
      title: "Site vitrine +",
      price: "800 €",
      hover: false,
      className: "",
      description: [
        "Hébergement et nom de domaine en .fr",
        "Gestion de contenu sous Wordpress",
        "Page d’accueil, de contact, de présentation",
        "maintenance de 6 mois",
      ],
    },
    {
      id: 3,
      title: "Personnalisé",
      price: "A définir",
      hover: false,
      className: "",
      description: ["A définir selon besoin"],
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
        console.log(newCardHover);
        const newCardsNotHover = tarifsCardsState.filter(
          (card) => card.id !== id
        );
        newCardsNotHover.forEach((object) => {
          object.className = "notHover";
          object.hover = false;
        });

        console.log(newCardsNotHover);

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
            Voici les tarifs de nos prestations notre web à{" "}
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
                    <Link href={"/contact"} className="ctaBtn ctaBtnScrolled">
                      <span>Me contacter</span>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </motion.div>
    </div>
  );
};

export default Tarifs;
