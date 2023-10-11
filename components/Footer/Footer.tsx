"use client";
import Link from "next/link";
import Container from "../Container/Container";
import styles from "./Footer.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <footer className={styles.footer}>
        <Container margin="isMedium">
          <div className={styles.footerContainer}>
            <div className={styles.leftContainer}>
              <h4>Webcraft - création de site internet</h4>
              <address>
                358 rue Pierre ADT <br></br> 54700 Pont-à-mousson
              </address>
              <p>06 42 48 42 49</p>
              <div>
                <a className={styles.email} href="mailto:webcraft@gmail.com">
                  <span>webcraft@gmail.com</span>
                </a>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <ul>
                <Link href="/" scroll>
                  <li>Accueil</li>
                </Link>
                <Link href="/presentation" scroll>
                  <li>Présentation</li>
                </Link>
                <Link href="/projets" scroll>
                  <li>Projets</li>
                </Link>
                <Link href="/contact" scroll>
                  <li>Me contacter</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <p>Copyright - Mentions légales</p>
          </div>
        </Container>
      </footer>
    </motion.div>
  );
};

export default Footer;
