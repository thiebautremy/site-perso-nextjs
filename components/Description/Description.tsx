import { type Article } from "@/types/types";
import Cards from "./Cards/Cards";
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
};

const Description: React.FC<DescriptionProps> = ({ blogData }) => {
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
        <AchievementsHomePage />
        <TextHighlighted text="La création d'un site internet est un investissement essentiel pour votre entreprise. Pour garantir son succès, il est recommandé de faire appel à un professionnel qui peut créer un site responsive, bien référencé et esthétiquement attrayant. Cela vous permettra de maximiser votre visibilité en ligne. Ne sous-estimez pas le pouvoir d'un site web bien conçu pour stimuler votre entreprise à Pont-à-Mousson." />
        <ArticlesHomePage blogData={blogData} />
        <FAQ />
      </div>
    </>
  );
};

export default Description;
