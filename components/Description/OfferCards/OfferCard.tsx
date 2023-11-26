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
      <span className={styles.cardContainer__logo}>{logo}</span>
      <h3 className={styles.cardContainer__title}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
