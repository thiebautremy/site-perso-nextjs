import AchievementsContainer from "@/components/Achievements/Achievements";
import MainLayout from "@/components/Layout/MainLayout";
import Head from "next/head";

export const Achievements = () => {
  return (
    <>
      <Head>
        <title>Web craftman - Réalisations</title>
        <meta
          name="description"
          content="Découvrez toutes les réalisations de Web craftman : sites vitrines, projets professionels ou personnels."
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://webcraftman.fr/logo.png"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Web craftman - Réalisations"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Découvrez toutes les réalisations de Web craftman : sites vitrines, projets professionels ou personnels."
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://webcraftman.fr/realisations"
        />
        <link rel="canonical" href="https://webcraftman.fr/realisations" />
        <meta
          name="keywords"
          content="agence digitale, agence web, création site internet, site vitrine, pont à mousson"
        />
      </Head>
      <MainLayout>
        <AchievementsContainer />
      </MainLayout>
    </>
  );
};
export default Achievements;
