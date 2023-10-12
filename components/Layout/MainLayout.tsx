import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

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
      <Navigation />
      {props.children}
      <Footer />
    </main>
  );
};

export default MainLayout;
