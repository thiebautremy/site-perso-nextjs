import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import { Signika } from "next/font/google";
import Footer from "../Footer/Footer";
import styles from "./MainLayout.module.scss";

const signika = Signika({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

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
      <Footer />
    </main>
  );
};

export default MainLayout;
