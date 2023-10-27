import Link from "next/link";
import styles from "./ArticlesContainer.module.scss";
import { Article } from "@/types/types";
import Container from "../Container/Container";
import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";

type ArticlesContainerProps = {
  articles: Article[];
};
const ArticlesContainer = ({ articles }: ArticlesContainerProps) => {
  return (
    <div className={styles.articlesContainer}>
      <Container margin="isHuge">
        <motion.div
          animate={{ x: [250, 0] }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1>Articles</h1>
          <div className={styles.articleCardsContainer}>
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ArticlesContainer;
