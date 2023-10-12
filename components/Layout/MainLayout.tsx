import {
  ReactElement,
  JSXElementConstructor,
  ReactPortal,
  ReactNode,
} from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

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
