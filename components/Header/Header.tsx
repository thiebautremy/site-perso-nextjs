import styles from "./HeaderStyle.module.scss";
import Image from "next/image";
import logoLongVectorised from "@/assets/logo/logo-long-yellow.png";
import Navigation from "../Navigation/Navigation";
import { Courgette } from "next/font/google";
import cx from "classnames";
import Container from "../Container/Container";

const courgette = Courgette({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <Container margin="isMedium">
        <div className={styles.headerContent}>
          <div className={styles.headerContentText}>
            <h1 className={styles.title}>
              <span
                className={cx(
                  courgette.className,
                  styles.firstTitle,
                  "animate__animated animate__slideInDown"
                )}
              >
                Agence Web
              </span>
              <span>Création de site internet</span>
              <span>à Pont-à-mousson</span>
            </h1>
            <h2 className={styles.subTitle}>
              Développons un site vitrine qui vous ressemble
            </h2>
          </div>
          <div
            className={cx(
              styles.logoContainer,
              "animate__animated animate__lightSpeedInRight"
            )}
          >
            <Image
              src={logoLongVectorised}
              alt={"Logo Webosaurus"}
              title={"Logo de Webosaurus"}
              className={styles.image}
              sizes="(max-width: 768px) 30vw, (max-width: 1200px) 30vw"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
