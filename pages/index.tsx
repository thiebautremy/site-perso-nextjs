import Head from "next/head";
import MainLayout from "@/components/Layout/MainLayout";
import Header from "@/components/Header/Header";
import { Achievement, type Article } from "@/types/types";
import dynamic from "next/dynamic";

const DynamicCards = dynamic(
  () => import("@/components/Description/OfferCards/OfferCards")
);

const DynamicDescription = dynamic(
  () => import("@/components/Description/Description")
);

type HomeProps = {
  blogData: { data: Article[] };
  achievementsData: { data: Achievement[] };
};
const Home: React.FC<HomeProps> = ({ blogData, achievementsData }) => {
  return (
    <>
      <Head>
        <title>Webosaurus - Création de site internet</title>
        <meta
          name="description"
          content="Agence web à Pont à Mousson. Création de site internet et référencement par Webosaurus pour un site vitrine de qualité à un prix abordable à Pont à mousson."
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
          content="Webosaurus - Agence digitale spécialisée dans la conception et la création de site internet à Pont à mousson"
        />
        <meta property="og:type" content="website" />
        <meta
          name="og:description"
          property="og:description"
          content="Agence web à Pont à Mousson. Création de site internet et référencement par Webosaurus pour un site vitrine de qualité à un prix abordable."
        />
        <meta name="og:url" property="og:url" content="https://webosaurus.fr" />
        <link rel="canonical" href="https://webosaurus.fr" />
        <meta
          name="keywords"
          content="agence digitale, agence web, création site internet, site vitrine, pont à mousson"
        />
      </Head>
      <MainLayout>
        <Header />
        <DynamicCards />
        <DynamicDescription
          blogData={blogData.data}
          achievementsData={achievementsData.data}
        />
      </MainLayout>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const resBlog = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/blog`, {
    method: "GET",
  });
  const resAchievements = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/achievements`,
    {
      method: "GET",
    }
  );
  const blogData = await resBlog.json();
  const achievementsData = await resAchievements.json();
  return { props: { blogData, achievementsData } };
}
