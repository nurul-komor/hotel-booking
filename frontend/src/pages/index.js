import Image from "next/image";
import AdminBar from "@/components/AdminBar";
import { FloatButton } from "antd";
import NavBar from "@/components/NavBar/NavBar";
// import HomePageSlider from "@/components/HomePageSlider/HomePageSlider";
export default function Home() {
  return (
    <>
      <AdminBar />
      <NavBar />
      <FloatButton.BackTop />
      {/* <HomePageSlider /> */}
    </>
  );
}
