import Link from "next/link";
import Head from "next/head";
import styles from "../styles/FourOhFour.module.scss";

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>Webosaurus - Page non trouvée</title>
      </Head>
      <div className={styles.fourOhFour}>
        <h1>Page non trouvée</h1>
        <p>Il semblerait que vous soyez perdu, laissez moi vous aider :</p>
        <Link href="/">
          <button className="ctaBtn">
            <span>Retour à l&apos;accueil</span>
          </button>
        </Link>
      </div>
    </>
  );
}
