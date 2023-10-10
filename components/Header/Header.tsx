import styles from "./Header.module.scss";
import Image from "next/image";
import ordi from "../../assets/ordinateur.png";
import earth from "../../assets/earth.jpg";

const Header = () => {
  return (
    <header>
      <div className={styles.headerContent}>
        <div className={styles.headerContentImage}>
          <Image
            src={earth}
            alt="dessin ordinateur"
            title="dessin ordinateur création site internet"
            className={styles.image}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.headerContentText}>
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
