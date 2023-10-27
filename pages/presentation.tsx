import MainLayout from "@/components/Layout/MainLayout";
import Head from "next/head";
import PresentationContainer from "@/components/Presentation/Presentation";
import Navigation from "@/components/Navigation/Navigation";

export const Presentation = () => {
  return (
    <>
      <Head>
        <title>Webosaurus - Présentation</title>
        <meta
          name="description"
          content="webosaurus, votre agence web à Pont à mousson, offre des solutions en création de site internet vitrine, design, développement et référencement naturel, SEO."
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://webosaurus.fr/logo.png"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Webosaurus - Présentation"
        />
        <meta
          name="og:description"
          property="og:description"
          content="webosaurus, votre agence web à Pont à mousson, offre des solutions en création de site internet vitrine, design, développement et référencement naturel, SEO."
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://webosaurus.fr/presentation"
        />
        <link rel="canonical" href="https://webosaurus.fr/presentation" />
        <meta
          name="keywords"
          content="agence digitale, agence web, création site internet, site vitrine, pont à mousson"
        />
        <meta property="og:type" content="website" />
      </Head>
      <MainLayout>
        <Navigation />
        <PresentationContainer />
      </MainLayout>
    </>
  );
};
export default Presentation;
