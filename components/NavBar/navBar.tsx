import styles from "./Navbar.module.scss";
// import logo from "../../assets/images/logoPhotoshop.png";
import Link from "next/link";

import { Button } from "primereact/button";
import Container from "../Container/Container";

const NavBar = () => {
  const start = (
    <Link href={"/"}>
      {/* <Image
        src={logo}
        alt="logo-mc-montage"
        title="logo MC Montage"
        className={styles.image}
        height={50}
        width={100}
      /> */}
      Logo
    </Link>
  );

  const links: { url: string; label: string }[] = [
    {
      url: "/",
      label: "Accueil",
    },
    {
      url: "/projets",
      label: "Projets",
    },
  ];

  return (
    <nav className={styles.navBar}>
      <Container margin="isHuge">
        <div className={styles.navBarContainer}>
          <div className={styles.linksContainer}>
            {links.map((link) => (
              <Link href={link.url} key={link.label} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <Link href={"/contact"} className="ctaBtn">
              Me contacter
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
