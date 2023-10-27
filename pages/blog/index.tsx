import React, { useState, useEffect } from "react";
import articlesData from "@/assets/blogData";
import MainLayout from "@/components/Layout/MainLayout";
import Navigation from "@/components/Navigation/Navigation";
import Head from "next/head";
import ArticlesContainer from "@/components/Articles/ArticlesContainer";
import { Article } from "@/types/types";

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);

  const getArticles = async () => {
    setArticles(articlesData);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <HeadCustom />
      <MainLayout>
        <Navigation />
        <ArticlesContainer articles={articles} />
      </MainLayout>
    </>
  );
}

const HeadCustom = () => (
  <Head>
    <title>Webosaurus - Blog</title>
  </Head>
);
