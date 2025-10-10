import Banner from "@/components/home/Banner";
import Category from "@/components/home/Category";
import FlashSale from "@/components/home/FlashSale";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FlashSale />
      <Category/>
    </>
  );
}
