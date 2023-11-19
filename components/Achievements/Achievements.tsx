import Container from "../Container/Container";
import Achievement from "./Achievement";
import styles from "./Achievements.module.scss";
import cx from "classnames";
import { type Achievement as AchievementType } from "@/types/types";

type AchievementsProps = {
  achievementsData: AchievementType[];
};

const Achievements: React.FC<AchievementsProps> = ({ achievementsData }) => {
  return (
    <div className={cx(styles.achievementsContainer, "achievementsContainer")}>
      <Container margin="isMedium">
        <h1>Mes réalisations</h1>
      </Container>
      <Container margin="isHuge">
        {achievementsData?.map((achievement) => (
          <Achievement key={achievement.id} {...achievement} />
        ))}
      </Container>
    </div>
  );
};

export default Achievements;
