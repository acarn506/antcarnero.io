import Nav from "../Nav/Nav";
import Head from "next/head";
import Image from "next/image";

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
      <article className="logo">
        <Image src="/vercel.svg" alt="me" width="80" height="80" />
      </article>
      <Nav />
      <main>{children}</main>
    </>
  );
}
