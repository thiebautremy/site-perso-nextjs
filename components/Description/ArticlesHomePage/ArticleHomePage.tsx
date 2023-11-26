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
    <Link href={`/blog/${slug}`}>
      <div className={styles.articleHomePage}>
        <div className={styles.articleHomePage__articleContainerHomePage}>
          <div
            className={
              styles.articleHomePage__articleContainerHomePage__articleDescription
            }
          >
            <span>{`Publié le : ${formattedDate}`}</span>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.catchPhrase}>{parse(catchPhrase)}</div>
          </div>
        </div>
        <div className={styles.articleHomePageBackground}></div>
      </div>
    </Link>
  );
};

export default ArticleHomePage;
