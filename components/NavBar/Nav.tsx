import Link from "next/link";
import styles from "./Nav.module.scss";

type NavType = {
  setVisible: (item: boolean) => void;
};
const Nav = ({ setVisible }: NavType) => {
  const links: { url: string; label: string }[] = [
    {
      url: "/",
      label: "Accueil",
    },
    {
      url: "/projets",
      label: "Projets",
    },
    {
      url: "/contact",
      label: "Contact",
    },
  ];

  return (
    <div className={styles.navContainer}>
      {links.map((link) => (
        <Link
          href={link.url}
          key={link.label}
          className={styles.link}
          onClick={() => setVisible(false)}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
