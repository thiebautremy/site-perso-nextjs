import "./styles/reset.scss";
import "./styles/globals.scss";
import type { Metadata } from "next";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Signika } from "next/font/google";

const signika = Signika({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "THIEBAUT Rémy - Développeur web",
  description: "Développeur web, créateur de site web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={signika.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
