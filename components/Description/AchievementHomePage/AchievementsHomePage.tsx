import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import achievementsData from "@/components/Achievements/achievementsData";
import Link from "next/link";
import styles from "./AchievementsHomePage.module.scss";
import AchievementHomePage, { AchievementType } from "./AchievementHomePage";
import { useEffect, useState } from "react";

const AchievementsHomePage = () => {
  const [achievements, setAchievements] = useState<AchievementType[]>([]);

  useEffect(() => {
    setAchievements(achievementsData.slice(0, 2));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className={styles.achievements}>
        <h2 className={styles.title}>
          Les derniers projets de création de sites web
        </h2>
        <p className={styles.subtitle}>
          Quelques uns des derniers projets de création de site web
        </p>
        <div className={styles.achievementsContainer}>
          {achievements.map((achievement) => (
            <AchievementHomePage key={achievement.id} {...achievement} />
          ))}
        </div>
        <div className={styles.allAchievementsLinkContainer}>
          <Link href="/realisations" className={styles.allAchievementsLink}>
            Voir toutes les réalisations <FaAngleRight />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementsHomePage;
