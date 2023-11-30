import Container from "../Container/Container";
import AnimationLayout from "../Layout/AnimationLayout";
import styles from "./TextHighlighted.module.scss";

type TextHighlightedProps = {
  firstSentence: string;
  secondSentence: string;
  thirdSentence: string;
  fourthSentence: string;
};
const TextHighlighted: React.FC<TextHighlightedProps> = ({
  text,
  firstSentence,
  secondSentence,
  thirdSentence,
  fourthSentence,
}: any) => {
  return (
    <Container margin="isHuge">
      <AnimationLayout>
        <div className={styles.textHighlightedContainer}>
          <p className={styles.textHighlighted}>{text}</p>
          <p className={styles.firstSentence}>{firstSentence}</p>
          <p className={styles.secondSentence}>{secondSentence}</p>
          <p className={styles.thirdSentence}>{thirdSentence}</p>
          <p className={styles.fourthSentence}>{fourthSentence}</p>
        </div>
      </AnimationLayout>
    </Container>
  );
};

export default TextHighlighted;
