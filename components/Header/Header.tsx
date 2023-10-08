"use client";
import { PropsWithChildren } from "react";
import TypeIt from "typeit-react";
import styles from "./header.module.scss";
import NavBar from "../NavBar/NavBar";
import Image from "next/image";
import ordi from "../../assets/ordinateur.jpg";

const SuperStrong = ({ children }: PropsWithChildren) => {
  return <strong style={{ fontSize: "20px" }}>{children}</strong>;
};

const Header = () => {
  return (
    <header>
      <NavBar />
      <div className={styles.headerContent}>
        <div className={styles.headerContentLeft}>
          <Image
            src={ordi}
            alt="logo-mc-montage"
            title="logo MC Montage"
            className={styles.image}
            fill
            style={{ objectFit: "contain" }}
          />
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
