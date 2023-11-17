import styles from "./Article.module.scss";
import { Article as ArticleType } from "@/types/types";
import Container from "../Container/Container";
import parse from "html-react-parser";
import Image from "next/image";
import CTAContainer from "../CTAContainer/CTAContainer";
import { DM_Serif_Display } from "next/font/google";
import cx from "classnames";
import AnimationLayout from "../Layout/AnimationLayout";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

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
      <AnimationLayout>
        <div className={styles.pictureContainer}>
          <Image
            src={picture.src}
            alt={picture.alt}
            title={picture.title}
            className={styles.image}
            loading="lazy"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 80vw"
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
          <div className={cx(styles.text, dmSerifDisplay.className)}>
            {parse(text)}
          </div>
          <CTAContainer />
        </Container>
      </AnimationLayout>
    </div>
  );
};

export default Article;
