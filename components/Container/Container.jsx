import Nav from "../Nav/Nav";
import Head from "next/head";

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

      <Nav />

      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
