import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import { Signika } from "next/font/google";
import dynamic from "next/dynamic";

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
      <div>{props.children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
