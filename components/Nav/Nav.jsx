import Link from "next/link";
import styles from "./Nav.module.css";
import Image from "next/image";

export default function Nav() {
  return (
    <header className={styles.header}>
      <Image
        src="/vercel.svg"
        alt="me"
        width="80"
        height="80"
        className={styles.logo}
      />
      <nav className={styles.navContent}>
        <ul className={styles.links}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/nameInfo">
              <a>Name Info</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
