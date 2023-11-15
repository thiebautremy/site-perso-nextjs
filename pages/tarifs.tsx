import MainLayout from "@/components/Layout/MainLayout";
import Head from "next/head";
import TarifsContainer from "@/components/Tarifs/Tarifs";
import Navigation from "@/components/Navigation/Navigation";

export const Prix = () => {
  return (
    <>
      <Head>
        <title>Webosaurus - Tarifs</title>
        <meta
          name="description"
          content="Webosaurus, votre agence web à Pont à mousson, offre différents tarifs pour créer votre projet web sur mesure."
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://webosaurus.fr/logo.png"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Webosaurus - Tarifs"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Webosaurus, votre agence web à Pont à mousson, offre différents tarifs pour créer votre projet web sur mesure."
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://webosaurus.fr/tarifs"
        />
        <link rel="canonical" href="https://webosaurus.fr/tarifs" />
        <meta
          name="keywords"
          content="agence digitale, agence web, création site internet, site vitrine, pont à mousson, tarif site internet, coût projet web"
        />
        <meta property="og:type" content="website" />
      </Head>
      <MainLayout>
        <Navigation />
        <TarifsContainer />
      </MainLayout>
    </>
  );
};
export default Prix;
