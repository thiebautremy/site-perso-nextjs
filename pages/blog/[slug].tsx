import articlesData from "@/assets/blogData";
import Article from "@/components/Articles/Article";
import MainLayout from "@/components/Layout/MainLayout";
import Navigation from "@/components/Navigation/Navigation";
import { Article as ArticleType } from "@/types/types";
import Head from "next/head";

function getSlugs(articles: { slug: string }[]) {
  return articles.map((article) => ({
    params: {
      slug: article.slug,
    },
  }));
}

const getArticleContent = (articles: ArticleType[], slug: string) => {
  return articles.find((article) => article.slug === slug);
};

type PageProps = {
  articleContent: ArticleType;
};
const Page = ({ articleContent }: PageProps) => {
  return (
    <>
      <Head>
        <title>{`Webosaurus - ${articleContent.title}`}</title>
        <meta name="description" content={articleContent.catchPhrase} />
        <meta
          name="og:image"
          property="og:image"
          content="https://webosaurus.fr/logo-long-yellow.png"
        />
        <meta property="og:image:width" content="988" />
        <meta property="og:image:height" content="323" />
        <meta
          name="og:title"
          property="og:title"
          content={`Webosaurus - ${articleContent.title}`}
        />
        <meta
          name="og:description"
          property="og:description"
          content={articleContent.catchPhrase}
        />
        <meta
          name="og:url"
          property="og:url"
          content={`https://webosaurus.fr/blog/${articleContent.slug}`}
        />
        <link
          rel="canonical"
          href={`https://webosaurus.fr/blog/${articleContent.slug}`}
        />
        <meta
          name="keywords"
          content={`agence digitale, agence web, création site internet, site vitrine, pont à mousson, ${articleContent.title}`}
        />
        <meta
          property="article:published_time"
          content={articleContent.publishedAt.toString()}
        ></meta>
        <meta
          property="article:modified_time"
          content={articleContent.updatedAt.toString()}
        ></meta>
        <meta property="og:type" content="article" />
        <meta property="article:tag" content={articleContent.tag}></meta>
        <meta name="author" content="Webosaurus - Agence web"></meta>
      </Head>
      <MainLayout>
        <Navigation />
        <Article {...articleContent} />
      </MainLayout>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [...getSlugs(articlesData)],
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const articleContent = getArticleContent(articlesData, params.slug);
  return { props: { articleContent } };
}

export default Page;
