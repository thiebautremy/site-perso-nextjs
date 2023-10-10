import { ReactNode } from "react";

type ContainerType = {
  children: ReactNode;
  margin: "isHuge" | "isBig" | "isMedium" | "isSmall";
};

const Container = ({ children, margin }: ContainerType) => {
  return <div className={margin}>{children}</div>;
};

export default Container;
