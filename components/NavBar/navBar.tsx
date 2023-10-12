import styles from "./Navbar.module.scss";
import Link from "next/link";
import Container from "../Container/Container";

const NavBar = () => {
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
