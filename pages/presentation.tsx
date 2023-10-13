import MainLayout from "@/components/Layout/MainLayout";
import Head from "next/head";
import PresentationContainer from "@/components/Presentation/Presentation";

export const Presentation = () => {
  return (
    <>
      <Head>
        <title>Web craftman - Présentation</title>
        <meta
          name="description"
          content="Webcraftman, votre agence web à Pont à mousson, offre des solutions en création de site internet vitrine, design, développement et référencement naturel, SEO."
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://webcraftman.fr/logo.png"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Web craftman - Présentation"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Webcraftman, votre agence web à Pont à mousson, offre des solutions en création de site internet vitrine, design, développement et référencement naturel, SEO."
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://webcraftman.fr/presentation"
        />
        <link rel="canonical" href="https://webcraftman.fr/presentation" />
        <meta
          name="keywords"
          content="agence digitale, agence web, création site internet, site vitrine, pont à mousson"
        />
      </Head>
      <MainLayout>
        <PresentationContainer />
      </MainLayout>
    </>
  );
};
export default Presentation;
