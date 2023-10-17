import ContactForm from "@/components/ContactForm/ContactForm";
import MainLayout from "@/components/Layout/MainLayout";
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
          content="https://webosaurus.fr/logo.png"
        />
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
      </Head>
      <MainLayout>
        <ContactForm />
      </MainLayout>
    </>
  );
};
export default Contact;
