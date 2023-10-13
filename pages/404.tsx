import Link from "next/link";
import Head from "next/head";
import styles from "../styles/FourOhFour.module.scss";

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>Web craftman - Page non trouvée</title>
      </Head>
      <div className={styles.fourOhFour}>
        <h1>Page non trouvée</h1>
        <p>Il semblerait que vous soyez perdu, laissez moi vous aider :</p>
        <Link href="/">
          <button className="ctaBtn">Retour à l&apos;accueil</button>
        </Link>
      </div>
    </>
  );
}
