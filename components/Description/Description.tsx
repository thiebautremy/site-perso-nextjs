import { Achievement, type Article } from "@/types/types";
import styles from "./Description.module.scss";
import cx from "classnames";
import dynamic from "next/dynamic";

const TextHighlighted = dynamic(
  () => import("../TextHighlighted/TextHighlighted")
);
const AchievementsHomePage = dynamic(
  () => import("./AchievementHomePage/AchievementsHomePage")
);
const ArticlesHomePage = dynamic(
  () => import("./ArticlesHomePage/ArticlesHomePage")
);
const FAQ = dynamic(() => import("./FAQ/FAQ"));

type DescriptionProps = {
  blogData: Article[];
  achievementsData: Achievement[];
};

const Description: React.FC<DescriptionProps> = ({
  blogData,
  achievementsData,
}) => {
  return (
    <>
      {/* <Cards /> */}
      <div className={cx(styles.descriptionContent, "descriptionContent")}>
        <TextHighlighted
          firstSentence="Un site web est essentiel pour prospérer"
          secondSentence="Il peut apporter de la valeur ajoutée"
          thirdSentence="Je vous propose de créer votre site web pour être visible"
          fourthSentence="à Pont-à-Mousson et au-delà"
        />
        <AchievementsHomePage achievementsData={achievementsData} />
        <TextHighlighted
          firstSentence="Un site web est essentiel pour votre entreprise"
          secondSentence="Faites appel à un professionnel pour créer un site responsive,"
          thirdSentence="Bien référencé et attrayant"
          fourthSentence=" Maximiser votre visibilité à Pont-à-Mousson et au-delà"
        />
        <ArticlesHomePage blogData={blogData} />
        <FAQ />
      </div>
    </>
  );
};

export default Description;
