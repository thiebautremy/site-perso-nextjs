import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import { Signika } from "next/font/google";
import styles from "./MainLayout.module.scss";
import dynamic from "next/dynamic";
import CookieBanner from "../CookieBanner/CookieBanner";

const signika = Signika({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Footer = dynamic(() => import("../Footer/Footer"));

const MainLayout = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactElement
    | null
    | undefined;
}) => {
  return (
    <main className={signika.className}>
      <div className={styles.mainContent}>{props.children}</div>
      <CookieBanner />
      <Footer />
    </main>
  );
};

export default MainLayout;
