import Head from "next/head";
import Navbar from "../components/Navbar";
import MainPage from "../components/MainPage";

export default function Home() {
  return (
    <div>
      <Head>
        {/* TODO: Fix title */}
        <title>Guidr </title>
      </Head>
      <Navbar active="Home" />
      <MainPage />
    </div>
  );
}
