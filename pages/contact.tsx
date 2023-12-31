import ContactForm from "@/components/ContactForm/ContactForm";
import MainLayout from "@/components/Layout/MainLayout";
import Navigation from "@/components/Navigation/Navigation";
import Head from "next/head";

export const Contact = () => {
  return (
    <>
      <Head>
        <title>Webosaurus - Contact</title>
        <meta
          name="description"
          content="Contactez moi pour vos projets web sur-mesure. Je vous accompagne avec mon expérience afin de créer un site vitrine qui vous ressemble."
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
          content="Webosaurus - Contact"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Contactez moi pour vos projets web sur-mesure. Je vous accompagne avec mon expérience afin de créer un site vitrine qui vous ressemble."
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://webosaurus.fr/contact"
        />
        <link rel="canonical" href="https://webosaurus.fr/contact" />
        <meta
          name="keywords"
          content="agence digitale, agence web, création site internet, site vitrine, pont à mousson, contact"
        />
        <meta property="og:type" content="website" />
      </Head>
      <MainLayout>
        <Navigation />
        <ContactForm />
      </MainLayout>
    </>
  );
};
export default Contact;
