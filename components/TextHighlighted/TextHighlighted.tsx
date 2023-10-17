import styles from "./TextHighlighted.module.scss";

const TextHighlighted = ({ text }: any) => {
  return <p className={styles.textHighlighted}>{text}</p>;
};

export default TextHighlighted;
