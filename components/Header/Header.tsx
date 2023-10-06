"use client";
import { PropsWithChildren } from "react";
import TypeIt from "typeit-react";
import NavBar from "../NavBar/navBar";
import styles from "./header.module.scss";

const SuperStrong = ({ children }: PropsWithChildren) => {
  return <strong style={{ fontSize: "20px" }}>{children}</strong>;
};

const Header = () => {
  return (
    <header>
      <NavBar />
      <div className={styles.headerContent}>
        <div className={styles.headerContentLeft}>
          <p>Image à mettre</p>
        </div>
        <div className={styles.headerContentRight}>
          <TypeIt
            options={{
              strings: ["Rémy", "développeur web"],
              nextStringDelay: 20,
              speed: 80,
              waitUntilVisible: true,
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
