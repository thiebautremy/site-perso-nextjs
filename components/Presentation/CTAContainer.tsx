import Link from "next/link";
import Container from "../Container/Container";
import styles from "./CTAContainer.module.scss";

const CTAContainer = () => {
  return (
    <div className={styles.CTAContainer}>
      <h3 className={styles.title}>Vous avez un projet ?</h3>
      <p>Alors contactez moi et parlons-en.</p>
      <Link href={"/contact"} className={styles.ctaBtn}>
        Contactez-moi
      </Link>
    </div>
  );
};

export default CTAContainer;
