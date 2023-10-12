import MainLayout from "@/components/Layout/MainLayout";
import Head from "next/head";

export const Presentation = () => {
  return (
    <>
      <Head>
        <title>Web craftman - Présentation</title>
        <meta
          name="description"
          content="Webcraftman, votre agence web à Pont à mousson, offre des solutions en création de site internet vitrine, design, développement et référencement naturel, SEO."
        />
      </Head>
      <MainLayout>
        <h1>Presentation</h1>
      </MainLayout>
    </>
  );
};
export default Presentation;
