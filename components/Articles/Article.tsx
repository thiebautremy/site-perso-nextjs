import styles from "./Article.module.scss";
import { Article as ArticleType } from "@/types/types";
import Container from "../Container/Container";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import Image from "next/image";
import CTAContainer from "../CTAContainer/CTAContainer";

const Article = ({
  title,
  text,
  picture,
  publishedAt,
  readingTime,
}: ArticleType) => {
  const date = new Date(publishedAt);

  const formattedDate = date.toLocaleString("fr-FR", {
    dateStyle: "short",
    timeStyle: "short",
  });

  return (
    <div className={styles.article}>
      <Container margin="isHuge">
        <h1 className={styles.title}>{title}</h1>
      </Container>
      <motion.div
        animate={{ x: [250, 0] }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className={styles.pictureContainer}>
          <Image
            src={picture.src}
            alt={picture.alt}
            title={picture.title}
            className={styles.image}
            loading="eager"
            placeholder="blur"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <Container margin="isMedium">
          <div className={styles.articleInfos}>
            <span>{`Publié le : ${formattedDate}`}</span>
            <span>
              {`Temps de lecture : ${readingTime} ${
                readingTime > 1 ? "minutes" : "minute"
              }`}
            </span>
          </div>
        </Container>
        <Container margin="isHuge">
          <div className={styles.text}>{parse(text)}</div>
          <CTAContainer />
        </Container>
      </motion.div>
    </div>
  );
};

export default Article;
