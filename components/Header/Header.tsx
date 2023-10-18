import styles from "./HeaderStyle.module.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <motion.div
        animate={{ x: [250, 0] }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className={styles.headerContent}>
          <div className={styles.headerContentImage}></div>
          <div className={styles.headerContentText}>
            <h1 className={styles.title}>Création de site internet </h1>
            <p className={styles.text}>
              Je développe un site vitrine qui correspond à vos besoins.
            </p>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
