"use client";
import Link from "next/link";
import styles from "./Achievement.module.scss";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type AchievementType = {
  title: string;
  description: string;
  picture: { src: StaticImageData; alt: string; title: string };
  url: string;
};
const Achievement = ({ title, description, picture, url }: AchievementType) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className={styles.achievementContainer}>
        <div className={styles.achievementDescription}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link href={url}>Voir la réalisation</Link>
        </div>
        <div className={styles.achievementPictureContainer}>
          <Image
            src={picture.src}
            alt={picture.alt}
            title={picture.title}
            className={styles.image}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
