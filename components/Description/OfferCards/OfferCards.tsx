import styles from "./OfferCards.module.scss";
import {
  FaCode,
  FaDatabase,
  FaRegChartBar,
  FaArrowUpWideShort,
} from "react-icons/fa6";
import dynamic from "next/dynamic";
import AnimationLayout from "@/components/Layout/AnimationLayout";

const DynamicCards = dynamic(() => import("./OfferCard"));

const OfferCards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Création site internet",
      description:
        "Nous créerons ensemble un site vitrine qui correspond à vos envies",
      logo: <FaCode />,
    },
    {
      id: 2,
      title: "Référencement",
      description:
        "Appelé SEO, le référencement naturel est une étape importante pour que votre site soit bien classé dans les moteurs de recherche",
      logo: <FaArrowUpWideShort />,
    },
    {
      id: 3,
      title: "Site vitrine personnalisé",
      description: "Afin d'avoir un site agréable, dynamique et performant",
      logo: <FaRegChartBar />,
    },
    {
      id: 4,
      title: "Hébergement",
      description:
        "Choisir ensemble la solution d'hébergement gratuite ou payante qui correspond à vos besoins",
      logo: <FaDatabase />,
    },
  ];

  return (
    <AnimationLayout>
      <div className={styles.cards}>
        <h2 className={styles.cards__title}>Une offre complète</h2>
        <p className={styles.cards__subtitle}>
          La création d&apos;un site internet requiert des compétences larges
          allant de la conception technique, au référencement jusqu&apos;à
          l&apos;hébergement
        </p>
        <div className={styles.cards__cardsContainer}>
          {cardsData.map((card) => (
            <DynamicCards key={card.id} {...card} />
          ))}
        </div>
      </div>
    </AnimationLayout>
  );
};

export default OfferCards;
