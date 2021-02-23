import Nav from "../Nav/Nav";
import Head from "next/head";
import Image from "next/image";
import Footer from "../Footer/Footer";

import styles from "./Container.module.css";

export default function Container(props) {
  const { children, ...customMeta } = props;
  const meta = {
    title: "Next.js App",
    description: "",
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <section className={styles.heading}>
        <article className={styles.logo}>
          <Image src="/vercel.svg" alt="me" width="80" height="80" />
        </article>
        <Nav />
      </section>

      <main>
        {children}
        <Footer />
      </main>
    </>
  );
}
