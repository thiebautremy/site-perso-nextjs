"use client";
import styles from "./Navigation.module.scss";
import Container from "../Container/Container";
import DesktopNav from "./DesktopNav/DesktopNav";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav/MobileNav";
import { useWindowSize } from "./helper";

const Navigation = () => {
  const links: { url: string; label: string }[] = [
    {
      url: "/",
      label: "Accueil",
    },
    {
      url: "/realisations",
      label: "Réalisations",
    },
    {
      url: "/presentation",
      label: "Présentation",
    },
  ];
  const size = useWindowSize();

  return (
    <nav className={styles.navBar}>
      <Container margin="isHuge">
        <div className={styles.navBarContainer}>
          {size > 800 ? (
            <DesktopNav links={links} />
          ) : (
            <MobileNav links={links} />
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
