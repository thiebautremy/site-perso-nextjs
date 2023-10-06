import styles from "./navbar.module.scss";
import Image from "next/image";
// import logo from "../../assets/images/logoPhotoshop.png";
import { Menubar } from "primereact/menubar";
import Link from "next/link";

const NavBar = () => {
  const links = [
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

  return (
    <nav className={styles.nav}>
      <Menubar model={links} start={start} />
    </nav>
  );
};

export default NavBar;
