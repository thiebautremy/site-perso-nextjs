"use client";
import Link from "next/link";
import Container from "../Container/Container";
import styles from "./Footer.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import logoLongVectorised from "@/assets/logo/logo-long-vectorised.png";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <footer className={styles.footer}>
        <Container margin="isHuge">
          <div className={styles.footerContainer}>
            <div className={styles.leftContainer}>
              <div className={styles.title}>
                <div className={styles.logoContainer}>
                  <Image
                    src={logoLongVectorised}
                    alt={"Logo Webosaurus"}
                    title={"Logo de Webosaurus"}
                    className={styles.image}
                    loading="eager"
                    placeholder="blur"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h4>- Création de site internet</h4>
              </div>
              <address className={styles.address}>
                358 rue Pierre ADT <br></br> 54700 Pont-à-mousson
              </address>
              <p>06 42 48 42 49</p>
              <div>
                <a
                  className={styles.email}
                  href="mailto:remythiebaut52@gmail.com"
                >
                  <span>Par mail en cliquant ici</span>
                </a>
              </div>
            </div>
            <div className={styles.middleContainer}>
              <ul>
                <li>
                  <Link href="/" scroll>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/realisations" scroll>
                    Réalisations
                  </Link>
                </li>
                <li>
                  <Link href="/presentation" scroll>
                    Présentation
                  </Link>
                </li>
                <li>
                  <Link href="/tarifs" scroll>
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link href="/blog" scroll>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.rightContainer}>
              <Link href="/contact" scroll className="ctaBtn">
                <span>Me contacter</span>
              </Link>
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <Link href={"/mentions-legales"}>
              <p>Copyright - Mentions légales</p>
            </Link>
          </div>
        </Container>
      </footer>
    </motion.div>
  );
};

export default Footer;
