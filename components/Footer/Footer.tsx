import Link from "next/link";
import Container from "../Container/Container";
import styles from "./Footer.module.scss";
import Image from "next/image";
import logoLongVectorised from "@/assets/logo/logo-long-yellow.png";
import AnimationLayout from "../Layout/AnimationLayout";

const Footer = () => {
  return (
    <AnimationLayout>
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
                    loading="lazy"
                    placeholder="blur"
                    fill
                    sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h5>- Création de site internet</h5>
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
              <Link href="/contact" scroll className="ctaBtn ">
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
    </AnimationLayout>
  );
};

export default Footer;
