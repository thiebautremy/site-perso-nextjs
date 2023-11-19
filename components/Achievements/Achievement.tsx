import styles from "./Achievement.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import cx from "classnames";
import Container from "../Container/Container";
import { type Achievement as AchievementType } from "@/types/types";

const Achievement = ({
  title,
  description,
  techInfos,
  picture,
  url,
}: AchievementType) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Container margin="isMedium">
        <div
          className={cx(styles.achievementContainer, "achievementContainer")}
        >
          <div className={styles.achievementDescription}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p className={styles.techInfos}>{techInfos}</p>
            <a href={url} className={styles.link}>
              Voir la réalisation
            </a>
          </div>
          <div
            className={cx(
              styles.achievementPictureContainer,
              "achievementPictureContainer"
            )}
          >
            <Image
              src={picture.src}
              alt={picture.alt}
              title={picture.title}
              className={styles.image}
              loading="lazy"
              placeholder="blur"
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Achievement;
