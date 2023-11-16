import styles from "./ArticlesHomePage.module.scss";
import Container from "@/components/Container/Container";
import blogData from "@/assets/blogData";
import { Article as ArticleType } from "@/types/types";
import ArticleHomePage from "./ArticleHomePage";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import AnimationLayout from "@/components/Layout/AnimationLayout";

const ArticlesHomePage = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    setArticles(blogData.slice(0, 3));
  }, []);

  return (
    <div className={styles.articlesHomePage}>
      <Container margin="isHuge">
        <AnimationLayout>
          <h2 className={styles.title}>Les derniers articles</h2>
          <p className={styles.subtitle}>
            Retrouvez nos derniers articles sur la création de site internet, le
            SEO, les bonnes pratiques etc...
          </p>
          <div className={styles.articlesContainer}>
            {articles.map((article) => (
              <ArticleHomePage key={article.id} {...article} />
            ))}
          </div>
          <div className={styles.allArticlesLinkContainer}>
            <Link href="/blog" className={styles.allArticlesLink}>
              Voir tous les articles <FaAngleRight />
            </Link>
          </div>
        </AnimationLayout>
      </Container>
    </div>
  );
};

export default ArticlesHomePage;
