import styles from "./AchievementHomePage.module.scss";
import Image, { StaticImageData } from "next/image";

export type AchievementType = {
  title: string;
  description: string;
  picture: { src: StaticImageData; alt: string; title: string };
  url: string;
  id: number;
};
const AchievementHomePage = ({
  title,
  description,
  picture,
  url,
}: AchievementType) => {
  return (
    <div className={styles.achievementHomePage}>
      <div className={styles.achievementContainerHomePage}>
        <div className={styles.achievementPictureContainer}>
          <Image
            src={picture.src}
            alt={picture.alt}
            title={picture.title}
            className={styles.image}
            loading="lazy"
            fill
            sizes="(max-width: 768px) 40vw, (max-width: 1200px) 100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.achievementDescription}>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={url} className={styles.link}>
            Voir la réalisation
          </a>
        </div>
      </div>
      <div className={styles.achievementBackground}></div>
    </div>
  );
};

export default AchievementHomePage;
