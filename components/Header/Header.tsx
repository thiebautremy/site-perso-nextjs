import styles from "./HeaderStyle.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import logoLongVectorised from "@/assets/logo/logo-long-vectorised.png";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <motion.div
        animate={{ x: [250, 0] }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className={styles.headerContent}>
          <div className={styles.headerContentBg}></div>
          <div className={styles.headerContentText}>
            <div className={styles.logoContainer}>
              <Image
                src={logoLongVectorised}
                alt={"Logo Webosaurus"}
                title={"Logo de Webosaurus"}
                className={styles.image}
                loading="eager"
                sizes="(max-width: 768px) 10vw, (max-width: 1200px) 100vw"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className={styles.title}>
              <span>Agence Web</span>
              <span>Création de site internet</span>
              <span>à Pont-à-mousson</span>
            </h1>
            <h2 className={styles.subTitle}>
              Développons un site vitrine qui correspond à vos besoins
            </h2>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
