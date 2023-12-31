import styles from "./ArticlesHomePage.module.scss";
import { Article } from "@/types/types";
import ArticleHomePage from "./ArticleHomePage";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import AnimationLayout from "@/components/Layout/AnimationLayout";
import { useEffect, useState } from "react";

type ArticlesHomePageProps = {
  blogData: Article[];
};

const ArticlesHomePage: React.FC<ArticlesHomePageProps> = ({ blogData }) => {
  const [blogDataState, setBlogDataState] = useState<Article[]>([]);
  useEffect(() => {
    setBlogDataState(
      blogData.slice(blogData.length - 3, blogData.length).reverse()
    );
  }, [blogData]);
  return (
    <div className={styles.articlesHomePage}>
      <AnimationLayout>
        <h2 className={styles.articlesHomePage__title}>
          Les derniers articles
        </h2>
        <p className={styles.articlesHomePage__subtitle}>
          Retrouvez nos derniers articles sur la création de site internet, le
          SEO, les bonnes pratiques etc...
        </p>
        <div className={styles.articlesHomePage__articlesContainer}>
          {blogDataState.map((article) => (
            <ArticleHomePage key={article.id} {...article} />
          ))}
        </div>
        <div className={styles.articlesHomePage__allArticlesLinkContainer}>
          <Link
            href="/blog"
            className={styles.articlesHomePage__allArticlesLinkContainer__Link}
          >
            Voir tous les articles <FaAngleRight />
          </Link>
        </div>
      </AnimationLayout>
    </div>
  );
};

export default ArticlesHomePage;
