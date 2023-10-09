import styles from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";
import Image from "next/image";
import ordi from "../../assets/ordinateur.jpg";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className={styles.headerContent}>
        <div className={styles.headerContentLeft}>
          <Image
            src={ordi}
            alt="logo-mc-montage"
            title="logo MC Montage"
            className={styles.image}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.headerContentRight}>
          <div className={styles.logoContainer}>
            <Image
              src={logo}
              alt="logo-webcraft"
              title="logo Webcraft"
              className={styles.logo}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h1 className={styles.title}>Création de site internet </h1>
          <p className={styles.text}>
            Je développe un site vitrine qui correspond à vos besoins.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
