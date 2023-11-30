import styles from "./ArticlesContainer.module.scss";
import { Article } from "@/types/types";
import Container from "../Container/Container";
import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";
import AnimationLayout from "../Layout/AnimationLayout";

type ArticlesContainerProps = {
  articles: Article[];
};
const ArticlesContainer = ({ articles }: ArticlesContainerProps) => {
  return (
    <div className={styles.articlesContainer}>
      <Container margin="isHuge">
        <AnimationLayout>
          <h1>Articles</h1>
          <div className={styles.articleCardsContainer}>
            {articles.reverse().map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </AnimationLayout>
      </Container>
    </div>
  );
};

export default ArticlesContainer;
