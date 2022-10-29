import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        {/* TODO: Fix title */}
        <title>App | Lorem ipsum dolor sit amet.</title>
      </Head>
      <Navbar active="Home" />
    </div>
  );
}
