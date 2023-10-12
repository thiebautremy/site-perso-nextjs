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
          content="Agence web à Pont à Mousson. Création de site internet et référencement par Webcraft pour un site vitrine de qualité à un prix abordable."
        />
      </Head>
      <MainLayout>
        <Header />
        <Description />
      </MainLayout>
    </>
  );
}
