import Image from "next/image";
import NavPage from "./Navbar/navPage";
import HeroPage from "./HeroSection/heroPage";
import Slider from "./components/slider";
import Hero2 from "./Hero2/hero2";

export default function Home() {
  return (
    <div className="">
      <NavPage/>
      <HeroPage/>
      <Slider/>
      <Hero2/>
    </div>
  );
}
