import Image from "next/image";
import NavPage from "./Navbar/navPage";
import HeroPage from "./HeroSection/heroPage";
import Slider from "./components/slider";

export default function Home() {
  return (
    <div className="">
      <NavPage/>
      <HeroPage/>
      <Slider/>
    </div>
  );
}
