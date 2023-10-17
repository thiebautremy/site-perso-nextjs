import styles from "./MobileNav.module.scss";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { useState } from "react";

type MobileNavType = {
  links: { url: string; label: string }[];
};

const MobileNav = ({ links }: MobileNavType) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="w-full md:w-20rem lg:w-30rem"
      >
        <div className={styles.links}>
          <div className={styles.linksContainerMobile}>
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
      </Sidebar>

      <Button
        icon={
          <i
            className="pi pi-align-justify"
            style={{ marginRight: "0.5rem" }}
          />
        }
        onClick={() => setVisible(true)}
        className={styles.menuBtn}
        label="Menu"
      />
    </>
  );
};

export default MobileNav;
