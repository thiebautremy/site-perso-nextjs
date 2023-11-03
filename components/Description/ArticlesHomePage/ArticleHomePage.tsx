import styles from "./ArticleHomePage.module.scss";
import { Article as ArticleType } from "@/types/types";
import parse from "html-react-parser";
import Link from "next/link";

const ArticleHomePage = ({
  title,
  catchPhrase,
  publishedAt,
  slug,
}: ArticleType) => {
  const date = new Date(publishedAt);

  const formattedDate = date.toLocaleString("fr-FR", {
    dateStyle: "short",
  });

  return (
    <Link href={`/blog/${slug}`} className={styles.link}>
      <div className={styles.articleHomePage}>
        <div className={styles.articleContainerHomePage}>
          <div className={styles.articleDescription}>
            <span>{`Publié le : ${formattedDate}`}</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.catchPhrase}>{parse(catchPhrase)}</p>
          </div>
        </div>
        <div className={styles.articleHomePageBackground}></div>
      </div>
    </Link>
  );
};

export default ArticleHomePage;
