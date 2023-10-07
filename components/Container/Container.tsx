import { ReactNode } from "react";

type ContainerType = {
  children: ReactNode;
  margin: "isBig" | "isMedium" | "isSmall";
};

const Container = ({ children, margin }: ContainerType) => {
  const getMargin = () => {
    switch (margin) {
      case "isBig":
        return "0 4rem";
      case "isMedium":
        return "0 2rem";
      case "isSmall":
        return "0 1rem";
    }
  };

  return <div style={{ margin: getMargin() }}>{children}</div>;
};

export default Container;
