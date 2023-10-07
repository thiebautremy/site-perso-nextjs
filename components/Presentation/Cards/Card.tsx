import styles from "./Card.module.scss";

type CardType = {
  title: string;
  description: string;
  logo: string;
  key: number;
};

const Card = ({ title, description, logo }: CardType) => {
  return (
    <div className={styles.cardContainer}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
