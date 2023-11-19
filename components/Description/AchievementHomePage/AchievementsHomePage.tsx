import { FaAngleRight } from "react-icons/fa";
import achievementsData from "@/components/Achievements/achievementsData";
import Link from "next/link";
import styles from "./AchievementsHomePage.module.scss";
import AchievementHomePage, { AchievementType } from "./AchievementHomePage";
import { useEffect, useState } from "react";
import AnimationLayout from "@/components/Layout/AnimationLayout";
import { type Achievement } from "@/types/types";

type AchievementsHomePageProps = {
  achievementsData: Achievement[];
};
const AchievementsHomePage: React.FC<AchievementsHomePageProps> = ({
  achievementsData,
}) => {
  const [achievements, setAchievements] = useState<AchievementType[]>([]);

  useEffect(() => {
    setAchievements(achievementsData.slice(0, 2));
  }, []);

  return (
    <AnimationLayout>
      <div className={styles.achievements}>
        <h2 className={styles.title}>
          Les derniers projets de création de sites web
        </h2>
        <p className={styles.subtitle}>
          Quelques uns des derniers projets de création de site web
        </p>
        <div className={styles.achievementsContainer}>
          {achievementsData.slice(0, 2).map((achievement) => (
            <AchievementHomePage key={achievement.id} {...achievement} />
          ))}
        </div>
        <div className={styles.allAchievementsLinkContainer}>
          <Link href="/realisations" className={styles.allAchievementsLink}>
            Voir toutes les réalisations <FaAngleRight />
          </Link>
        </div>
      </div>
    </AnimationLayout>
  );
};

export default AchievementsHomePage;
