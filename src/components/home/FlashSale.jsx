"use client";
import Image from "next/image";
import CommonHeading from "./CommonHeading";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRegEye,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";
import { Poppins } from "next/font/google";
import Slider from "react-slick";
import { useContext, useState } from "react";
import { ProductContext } from "@/context/ProductContext";
import "slick-carousel/slick/slick.css";

const popins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const FlashSale = () => {
  const { products } = useContext(ProductContext);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <CommonHeading heading={"Flash Sales"} subHeading={"Today's"} padding_top={"100px"}>
      <Slider className="relative pt-10" {...settings}>
        {products.slice(0, 10).map((item, index) => {
          return <ProductCard key={index} element={item} />;
        })}
      </Slider>
    </CommonHeading>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="size-[46px] bg-[#F5F5F5] rounded-full grid place-items-center cursor-pointer absolute right-0 top-[-40px] z-10 hover:bg-gray-300 transition-colors duration-200 hidden md:grid"
      onClick={onClick}
    >
      <FaArrowRight />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="size-[46px] bg-[#F5F5F5] rounded-full grid place-items-center cursor-pointer absolute right-[60px] top-[-40px] z-10 hover:bg-gray-300 transition-colors duration-200 hidden md:grid"
      onClick={onClick}
    >
      <FaArrowLeft />
    </button>
  );
};

const ProductCard = ({ element }) => {
  const { images, title, price } = element;
  const finalImage = images[0];
  const oldPrice = (price - (price * 10) / 100).toFixed(2);

  return (
    <div className="max-w-[270px] mx-auto px-2 sm:px-1">
      <div className="relative group">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            width={270}
            height={250}
            src={finalImage}
            alt={title}
            className="w-full h-[200px] sm:h-[220px] md:h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 rounded-[4px] bg-[#DB4444] py-1 px-2 sm:px-3 text-white text-xs sm:text-sm">
          -10%
        </div>

        <div className="flex flex-col gap-1 sm:gap-2 absolute top-2 sm:top-3 right-2 sm:right-3">
          <button className="size-[28px] sm:size-[34px] grid place-items-center rounded-full bg-white cursor-pointer hover:bg-gray-100 transition-colors duration-200 shadow-sm">
            <FaRegHeart className="text-xs sm:text-sm" />
          </button>
          <button className="size-[28px] sm:size-[34px] grid place-items-center rounded-full bg-white cursor-pointer hover:bg-gray-100 transition-colors duration-200 shadow-sm">
            <FaRegEye className="text-xs sm:text-sm" />
          </button>
        </div>
      </div>

      <div className="pt-3 sm:pt-4 px-1">
        <h2
          className={`text-sm sm:text-base leading-[20px] sm:leading-[24px] pb-2 line-clamp-2 ${popins.className}`}
        >
          {title}
        </h2>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <span
            className={`text-sm sm:text-base text-[#DB4444] leading-[20px] sm:leading-[24px] font-semibold ${popins.className}`}
          >
            ${oldPrice}
          </span>
          <del
            className={`text-sm sm:text-base leading-[20px] sm:leading-[24px] text-gray-500 ${popins.className}`}
          >
            ${price}
          </del>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
