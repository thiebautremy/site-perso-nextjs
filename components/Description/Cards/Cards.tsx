import Card from "./Card";
import styles from "./Cards.module.scss";
import {
  FaCode,
  FaDatabase,
  FaRegChartBar,
  FaArrowUpWideShort,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Création site internet",
      description: "Bla bla bla",
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
      description: "Bla bla bla dynamique",
      logo: <FaRegChartBar />,
    },
    {
      id: 4,
      title: "Hébergement",
      description: "Bla bla bla dynamique",
      logo: <FaDatabase />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className={styles.cardsContainer}>
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </motion.div>
  );
};

export default Cards;
