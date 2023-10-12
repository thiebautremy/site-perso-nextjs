import "./styles/reset.scss";
import type { Metadata } from "next";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Signika } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";

const signika = Signika({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web craftman - Création de site internet",
  description:
    "Agence web à Pont à Mousson. Création de site internet et référencement par Webcraft pour un site vitrine de qualité à un prix abordable",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={signika.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <NavBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
