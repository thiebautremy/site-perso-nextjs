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
      </Head>
      <MainLayout>
        <AchievementsContainer />
      </MainLayout>
    </>
  );
};
export default Achievements;
