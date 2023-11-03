import styles from "./ArticlesHomePage.module.scss";
import { motion } from "framer-motion";
import Container from "@/components/Container/Container";
import blogData from "@/assets/blogData";
import ArticleHomePage from "./ArticleHomePage";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const ArticlesHomePage = () => {
  return (
    <div className={styles.articlesHomePage}>
      <Container margin="isHuge">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2 className={styles.title}>Les derniers articles</h2>
          <p className={styles.subtitle}>
            Retrouvez nos derniers articles sur la création de site internet, le
            SEO, les bonnes pratiques etc...
          </p>
          {blogData.slice(0, 3).map((article) => (
            <ArticleHomePage key={article.id} {...article} />
          ))}
          <div className={styles.allArticlesLinkContainer}>
            <Link href="/blog" className={styles.allArticlesLink}>
              Voir tous les articles <FaAngleRight />
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ArticlesHomePage;
