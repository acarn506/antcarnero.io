import Link from "next/link";
import styles from "./Footer.module.css";

const ExternalLink = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </section>

      <section>
        <ExternalLink href="https://github.com/acarn506">GitHub</ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/anthony-carnero">
          Linkedin
        </ExternalLink>
        <ExternalLink href="https://vizbyd3.com">VizbyD3</ExternalLink>
      </section>
    </footer>
  );
}
