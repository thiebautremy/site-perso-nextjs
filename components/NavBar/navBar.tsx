import styles from "./navbar.module.scss";
import Image from "next/image";
// import logo from "../../assets/images/logoPhotoshop.png";
import { Menubar } from "primereact/menubar";
import Link from "next/link";

import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { Button } from "primereact/button";
import Nav from "./Nav";

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

  const [visible, setVisible] = useState<boolean>(false);

  return (
    <nav className={styles.navBar}>
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <Nav setVisible={setVisible} />
      </Sidebar>
      <Button
        icon="pi pi-align-justify"
        className={styles.menuButton}
        onClick={() => setVisible(true)}
      >
        Menu
      </Button>
    </nav>
  );
};

export default NavBar;
