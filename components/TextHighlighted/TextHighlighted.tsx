import Container from "../Container/Container";
import AnimationLayout from "../Layout/AnimationLayout";
import styles from "./TextHighlighted.module.scss";

const TextHighlighted = ({ text }: any) => {
  return (
    <Container margin="isHuge">
      <AnimationLayout>
        <div className={styles.textHighlightedContainer}>
          <p className={styles.textHighlighted}>{text}</p>
        </div>
      </AnimationLayout>
    </Container>
  );
};

export default TextHighlighted;
