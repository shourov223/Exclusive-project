import Arrival from "@/components/home/Arrival";
import Banner from "@/components/home/Banner";
import BestSellings from "@/components/home/BestSellings";
import Category from "@/components/home/Category";
import FlashSale from "@/components/home/FlashSale";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FlashSale />
      <Category />
      <BestSellings />
      <Arrival />
    </>
  );
}
