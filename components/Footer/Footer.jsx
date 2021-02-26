import Link from "next/link";
import styles from "./Footer.module.css";

const ExternalLink = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h2>Socials</h2>
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
            <ExternalLink href="https://github.com/acarn506">
              GitHub
            </ExternalLink>
          </li>
          <li>
            {" "}
            <ExternalLink href="https://www.linkedin.com/in/anthony-carnero">
              Linkedin
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://vizbyd3.com">VizbyD3</ExternalLink>
          </li>
        </ul>
      </div>

      <div className={styles.footerBottom}>
        <p> Copyright © 2021 Next.js App. Designed by Anthony Carnero </p>
      </div>
    </footer>
  );
}
