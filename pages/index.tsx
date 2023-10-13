import Head from "next/head";
import Description from "@/components/Description/Description";
import MainLayout from "@/components/Layout/MainLayout";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web craftman - Création de site internet</title>
        <meta
          name="description"
          content="Agence web à Pont à Mousson. Création de site internet et référencement par Webcraft pour un site vitrine de qualité à un prix abordable à Pont à mousson."
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://webcraftman.fr/logo.png"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Web craftman - agence digitale spécialisée dans la conception et la création de site internet à Pont à mousson"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Agence web à Pont à Mousson. Création de site internet et référencement par Webcraft pour un site vitrine de qualité à un prix abordable."
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://webcraftman.fr"
        />
        <link rel="canonical" href="https://webcraftman.fr" />
        <meta
          name="keywords"
          content="agence digitale, agence web, création site internet, site vitrine, pont à mousson"
        />
      </Head>
      <MainLayout>
        <Header />
        <Description />
      </MainLayout>
    </>
  );
}
