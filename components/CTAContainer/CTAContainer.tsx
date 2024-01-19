import Link from "next/link";
import Container from "@/components/Container/Container";
import styles from "./CTAContainer.module.scss";
import Image from "next/image";
import logoLongVectorised from "@/assets/logo/logo-long-yellow.png";
import { FaCheckCircle } from "react-icons/fa";

const CTAContainer = () => {
  return (
    <Container margin="isHuge">
      <div className={styles.CTAContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={logoLongVectorised}
            alt={"Logo Webosaurus"}
            title={"Logo de Webosaurus"}
            className={styles.image}
            loading="lazy"
            fill
            sizes="(max-width: 768px) 15vw, (max-width: 1200px) 15vw"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>Vous avez un projet ?</h3>
          <p>Contactez moi et parlons-en.</p>
          <div className={styles.benefits}>
            <span className={styles.benefit}>
              <FaCheckCircle />
              Réponse rapide
            </span>
            <span className={styles.benefit}>
              <FaCheckCircle />
              Devis gratuit
            </span>
          </div>
          <Link href={"/contact"} className={styles.ctaBtn}>
            Contactez-moi
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default CTAContainer;
