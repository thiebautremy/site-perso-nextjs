import AchievementsContainer from "@/components/Achievements/Achievements";
import MainLayout from "@/components/Layout/MainLayout";
import Navigation from "@/components/Navigation/Navigation";
import Head from "next/head";
import { type Achievement } from "@/types/types";
import { Suspense } from "react";

type AchievementsProps = {
  achievementsData: Achievement[];
};

const Achievements: React.FC<AchievementsProps> = ({ achievementsData }) => {
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
          content="https://webosaurus.fr/yellow-short.png"
        />
        <meta property="og:image:width" content="240" />
        <meta property="og:image:height" content="323" />
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
        <Suspense>
          <AchievementsContainer achievementsData={achievementsData} />
        </Suspense>
      </MainLayout>
    </>
  );
};

export default Achievements;

export async function getServerSideProps() {
  const resAchievements = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/achievements`,
    {
      method: "GET",
    }
  );
  const achievementsData = await resAchievements.json();
  return { props: { achievementsData: achievementsData.data } };
}
