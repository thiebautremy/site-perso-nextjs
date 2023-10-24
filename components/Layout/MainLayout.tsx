import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import styles from "./MainLayout.module.scss";

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
    <main>
      {/* <Navigation /> */}
      <div className={styles.mainContent}>{props.children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
