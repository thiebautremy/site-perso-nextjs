import ContactForm from "@/components/ContactForm/ContactForm";
import MainLayout from "@/components/Layout/MainLayout";
import Head from "next/head";

export const Contact = () => {
  return (
    <>
      <Head>
        <title>Web craftman - Contact</title>
        <meta name="description" content="TODO" />
      </Head>
      <MainLayout>
        <ContactForm />
      </MainLayout>
    </>
  );
};
export default Contact;
