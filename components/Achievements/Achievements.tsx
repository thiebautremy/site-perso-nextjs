import Container from "../Container/Container";
import Achievement from "./Achievement";
import styles from "./Achievements.module.scss";
import achievementsData from "./achievementsData";
import cx from "classnames";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Achievements = () => {
  return (
    <div className={cx(styles.achievementsContainer, "achievementsContainer")}>
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
