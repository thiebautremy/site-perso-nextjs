import styles from "./HeaderStyle.module.scss";
import Image from "next/image";
import earth from "../../assets/earth.jpg";

const Header = () => {
  return (
    <header>
      <div className={styles.headerContent}>
        <div className={styles.headerContentImage}>
          <Image
            src={earth}
            alt="La Terre avec des inscriptions de programmation"
            title="Terre avec des inscriptions de programmation"
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
