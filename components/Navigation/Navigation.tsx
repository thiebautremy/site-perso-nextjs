"use client";
import styles from "./Navigation.module.scss";
import Container from "../Container/Container";
import DesktopNav from "./DesktopNav/DesktopNav";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav/MobileNav";
import { useWindowSize } from "./helper";
import cx from "classnames";

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
    {
      url: "/tarifs",
      label: "Tarifs",
    },
    {
      url: "/blog",
      label: "Blog",
    },
  ];
  const size = useWindowSize();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 600) {
        if (window.scrollY > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      } else {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={cx(styles.navBar, scrolled && styles.navBarScrolled)}>
      <Container margin="isHuge">
        <div className={styles.navBarContainer}>
          {size > 800 ? (
            <DesktopNav links={links} scrolled={scrolled} />
          ) : (
            <MobileNav links={links} scrolled={scrolled} />
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
