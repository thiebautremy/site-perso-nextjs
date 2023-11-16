import Head from "next/head";
import Description from "@/components/Description/Description";
import MainLayout from "@/components/Layout/MainLayout";
import Header from "@/components/Header/Header";
import { type Article } from "@/types/types";

type HomeProps = {
  blogData: { data: Article[] };
};
const Home: React.FC<HomeProps> = ({ blogData }) => {
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
          content="https://webosaurus.fr/logo.png"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Webosaurus - agence digitale spécialisée dans la conception et la création de site internet à Pont à mousson"
        />
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
        <Description blogData={blogData.data} />
      </MainLayout>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/blog`, {
    method: "GET",
  });
  const data = await res.json();
  return { props: { blogData: data } };
}
