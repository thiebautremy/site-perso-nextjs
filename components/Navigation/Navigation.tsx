import styles from "./Navigation.module.scss";
import Container from "../Container/Container";
import DesktopNav from "./DesktopNav/DesktopNav";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav/MobileNav";

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <nav className={styles.navBar}>
      <Container margin="isHuge">
        <div className={styles.navBarContainer}>
          {windowWidth > 800 ? (
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
