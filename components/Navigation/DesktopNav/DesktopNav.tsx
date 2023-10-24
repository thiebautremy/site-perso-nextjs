import styles from "./DesktopNav.module.scss";
import Link from "next/link";
import cx from "classnames";

type DesktopNavType = {
  links: { url: string; label: string }[];
  scrolled: boolean;
};

const DesktopNav = ({ links, scrolled }: DesktopNavType) => {
  return (
    <>
      <div className={styles.linksContainer}>
        {links.map((link) => (
          <Link href={link.url} key={link.label} className={styles.link}>
            {link.label}
          </Link>
        ))}
      </div>
      <div>
        <Link
          href={"/contact"}
          className={cx("ctaBtn", scrolled && "ctaBtnScrolled")}
        >
          Me contacter
        </Link>
      </div>
    </>
  );
};

export default DesktopNav;
