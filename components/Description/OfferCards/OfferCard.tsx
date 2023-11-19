import { ReactElement } from "react";
import styles from "./OfferCard.module.scss";

type OfferCardType = {
  title: string;
  description: string;
  logo: ReactElement;
  key: number;
};

const Card = ({ title, description, logo }: OfferCardType) => {
  return (
    <div className={styles.cardContainer}>
      <span className={styles.logo}>{logo}</span>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
