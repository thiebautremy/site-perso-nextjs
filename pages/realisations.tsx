import AchievementsContainer from "@/components/Achievements/Achievements";
import MainLayout from "@/components/Layout/MainLayout";
import Navigation from "@/components/Navigation/Navigation";
import Head from "next/head";

export const Achievements = () => {
  return (
    <>
      <Head>
        <title>Webosaurus - Réalisations</title>
        <meta
          name="description"
          content="Découvrez toutes les réalisations de Webosaurus : sites vitrines, projets professionels ou personnels."
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://webosaurus.fr/logo.png"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Webosaurus - Réalisations"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Découvrez toutes les réalisations de Webosaurus : sites vitrines, projets professionels ou personnels."
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://webosaurus.fr/realisations"
        />
        <link rel="canonical" href="https://webosaurus.fr/realisations" />
        <meta
          name="keywords"
          content="agence digitale, agence web, création site internet, site vitrine, pont à mousson"
        />
        <meta property="og:type" content="website" />
      </Head>
      <MainLayout>
        <Navigation />
        <AchievementsContainer />
      </MainLayout>
    </>
  );
};
export default Achievements;
