import React, { useState, useEffect, Suspense } from "react";
import MainLayout from "@/components/Layout/MainLayout";
import Navigation from "@/components/Navigation/Navigation";
import Head from "next/head";
import ArticlesContainer from "@/components/Articles/ArticlesContainer";
import { Article } from "@/types/types";

export default function Articles({ data }: any) {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    setArticles(data);
  }, [data]);

  return (
    <>
      <HeadCustom />
      <MainLayout>
        <Navigation />
        <Suspense fallback={<p>loading...</p>}>
          <ArticlesContainer articles={articles} />
        </Suspense>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/blog`, {
    method: "GET",
  });
  const data = await res.json();
  return { props: { ...data } };
}

const HeadCustom = () => (
  <Head>
    <title>Webosaurus - Blog</title>
    <meta
      name="description"
      content="Liste des articles écrit par Webosaurus sur la création de site internet, le SEO, l'hébergement etc..."
    />
    <meta
      name="og:image"
      property="og:image"
      content="https://webosaurus.fr/logo.png"
    />
    <meta name="og:title" property="og:title" content="Webosaurus - Blog" />
    <meta
      name="og:description"
      property="og:description"
      content="Liste des articles écrit par Webosaurus sur la création de site internet, le SEO, l'hébergement etc..."
    />
    <meta
      name="og:url"
      property="og:url"
      content="https://webosaurus.fr/blog"
    />
    <link rel="canonical" href="https://webosaurus.fr/blog" />
    <meta
      name="keywords"
      content="agence digitale, agence web, création site internet, site vitrine, pont à mousson, article, SEO"
    />
    <meta property="og:type" content="website" />
  </Head>
);
