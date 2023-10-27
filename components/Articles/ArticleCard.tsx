import { Article } from "@/types/types";
import styles from "./ArticleCard.module.scss";
import parse from "html-react-parser";
import Link from "next/link";

const ArticleCard = ({ slug, title, catchPhrase }: Article) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className={styles.articleCardContainer}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.description}>{parse(catchPhrase)}</div>
      </div>
    </Link>
  );
};

export default ArticleCard;
