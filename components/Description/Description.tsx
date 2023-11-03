import Cards from "./Cards/Cards";
import styles from "./Description.module.scss";
import { motion } from "framer-motion";
import cx from "classnames";
import TextHighlighted from "../TextHighlighted/TextHighlighted";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import achievementsData from "@/components/Achievements/achievementsData";
import AchievementHomePage from "./AchievementHomePage/AchievementHomePage";
import FAQ from "./FAQ/FAQ";

const Description = () => {
  return (
    <>
      <Cards />
      <div className={cx(styles.descriptionContent, "descriptionContent")}>
        <TextHighlighted
          text="Aujourd'hui, la création d'un site internet est devenue
              une étape cruciale pour toute entreprise désireuse de prospérer.
              Un site web bien conçu peut apporter une vrai valeur
              ajoutée à votre projet. C'est pourquoi, je vous propose mon
              expertise afin de créer votre site web et devenir ainsi plus
              visible sur Pont à mousson et au delà."
        />
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
        </motion.div>
        <FAQ />
        <TextHighlighted text="La création d'un site internet est un investissement essentiel pour votre entreprise. Pour garantir son succès, il est recommandé de faire appel à un professionnel qui peut créer un site responsive, bien référencé et esthétiquement attrayant. Cela vous permettra de maximiser votre visibilité en ligne. Ne sous-estimez pas le pouvoir d'un site web bien conçu pour stimuler votre entreprise à Pont-à-Mousson." />
      </div>
    </>
  );
};

export default Description;
