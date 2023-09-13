import Image from "next/image";
import Head from "next/head";
import AdminBar from "@/components/AdminBar";
import { FloatButton } from "antd";
import NavBar from "@/components/NavBar/NavBar";
// import HomePageSlider from "@/components/HomePageSlider/HomePageSlider";
export default function Home() {
  return (
    <>
      <Head>
        <title>Hotel Riorelax</title>
      </Head>
      <AdminBar />
      <NavBar />
      <FloatButton.BackTop />
      {/* <HomePageSlider /> */}
    </>
  );
}
