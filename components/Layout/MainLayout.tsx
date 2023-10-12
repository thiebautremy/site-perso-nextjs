import {
  ReactElement,
  JSXElementConstructor,
  ReactPortal,
  ReactNode,
} from "react";
import Footer from "../Footer/Footer";
import { Signika } from "next/font/google";
import NavBar from "../NavBar/NavBar";

const signika = Signika({
  subsets: ["latin"],
  variable: "--font-signika",
});
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
    <main className={signika.variable}>
      <NavBar />
      {props.children}
      <Footer />
    </main>
  );
};

export default MainLayout;
