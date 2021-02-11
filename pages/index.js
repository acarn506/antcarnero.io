import Nav from "../components/Nav";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Nav />
      <h1>Home</h1>
    </>
  );
}
