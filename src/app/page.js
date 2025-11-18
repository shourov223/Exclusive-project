import Arrival from "@/components/home/Arrival";
import Banner from "@/components/home/Banner";
import BestSellings from "@/components/home/BestSellings";
import Category from "@/components/home/Category";
import Facilities from "@/components/home/Facilities";
import FlashSale from "@/components/home/FlashSale";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <>
      <Banner />
      <Category />
      <BestSellings />
      <Arrival />
      <Facilities />
    </>
  );
}
