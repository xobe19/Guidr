import Head from "next/head";
import Navbar from "../components/Navbar";
import MainPage from "../components/MainPage";

export default function Home() {
  return (
    <div>
      <Head>
        {/* TODO: Fix title */}
        <title>App | Lorem ipsum dolor sit amet.</title>
      </Head>
      <Navbar active="Home" />
      <MainPage />
    </div>
  );
}
