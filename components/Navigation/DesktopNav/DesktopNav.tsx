import styles from "./DesktopNav.module.scss";
import Link from "next/link";

type DesktopNavType = {
  links: { url: string; label: string }[];
};

const DesktopNav = ({ links }: DesktopNavType) => {
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
        <Link href={"/contact"} className="ctaBtn">
          Me contacter
        </Link>
      </div>
    </>
  );
};

export default DesktopNav;
