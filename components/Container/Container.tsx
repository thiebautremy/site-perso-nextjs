import { ReactNode } from "react";

type ContainerType = {
  children: ReactNode;
  margin: "isHuge" | "isBig" | "isMedium" | "isSmall";
};

const Container = ({ children, margin }: ContainerType) => {
  const getMargin = () => {
    switch (margin) {
      case "isHuge":
        return "0 12rem";
      case "isBig":
        return "0 8rem";
      case "isMedium":
        return "0 4rem";
      case "isSmall":
        return "0 2rem";
    }
  };

  return <div style={{ margin: getMargin() }}>{children}</div>;
};

export default Container;
