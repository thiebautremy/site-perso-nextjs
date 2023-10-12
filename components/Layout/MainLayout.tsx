import {
  ReactElement,
  JSXElementConstructor,
  ReactPortal,
  ReactNode,
} from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const MainLayout = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactPortal
    | ReactNode
    | null
    | undefined;
}) => {
  return (
    <main>
      <NavBar />
      {props.children}
      <Footer />
    </main>
  );
};

export default MainLayout;
