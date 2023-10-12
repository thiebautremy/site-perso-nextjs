import Container from "../Container/Container";
import Achievement from "./Achievement";
import styles from "./Achievements.module.scss";
import achievementsData from "./achievementsData";

const Achievements = () => {
  return (
    <div className={styles.achievementsContainer}>
      <Container margin="isMedium">
        <h1>Mes réalisations</h1>
      </Container>
      <Container margin="isHuge">
        {achievementsData.map((achievement) => (
          <Achievement key={achievement.id} {...achievement} />
        ))}
      </Container>
    </div>
  );
};

export default Achievements;
