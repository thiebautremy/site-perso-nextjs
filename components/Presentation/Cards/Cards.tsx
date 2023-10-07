import Card from "./Card";
import styles from "./Cards.module.scss";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      title: "Création site internet",
      description: "Bla bla bla",
      logo: "logo",
    },
    {
      id: 2,
      title: "Référencement",
      description: "SEO important bla bla bla",
      logo: "logo",
    },
    {
      id: 3,
      title: "Site vitrine personnalisé",
      description: "Bla bla bla dynamique",
      logo: "logo",
    },
  ];

  return (
    <div className={styles.cardsContainer}>
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Cards;
