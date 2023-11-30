import styles from "./MobileNav.module.scss";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { useState } from "react";
import cx from "classnames";
import { FaAlignLeft } from "react-icons/fa";

type MobileNavType = {
  links: { url: string; label: string }[];
  scrolled: boolean;
};

const MobileNav = ({ links, scrolled }: MobileNavType) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className={cx(
          "w-full md:w-20rem lg:w-30rem",
          scrolled && "sideBarScrolled"
        )}
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
            <Link href={"/contact"} className={"ctaBtn"}>
              <span>Me contacter</span>
            </Link>
          </div>
        </div>
      </Sidebar>

      <Button
        icon={<FaAlignLeft />}
        onClick={() => setVisible(true)}
        className={cx(styles.menuBtn, scrolled && styles.menuBtnScrolled)}
        label="Menu"
      />
    </>
  );
};

export default MobileNav;
