import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import longpic from "../public/hero/longpic.png";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Image src={longpic} alt="Long Picture" style={{ width: "100%", height: "auto" }} />
      <h1> OURBLOOMS </h1>

      <Footer/>
    </div>
  );
}
