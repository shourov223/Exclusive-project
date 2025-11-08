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
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <CommonHeading
      heading={"Flash Sales"}
      subHeading={"Today's"}
      padding_top={"100px"}
    >
      <Slider className="relative pt-6 md:pt-10" {...settings}>
        {products.slice(0, 10).map((item, index) => {
          return <ProductCard key={index} element={item} />;
        })}
      </Slider>
      <div className="flex justify-center pt-8 md:pt-[60px] px-4">
        <button
          className={`w-full sm:w-auto py-3 md:py-4 px-8 md:px-[48px] bg-[#DB4444] rounded-[4px] text-white text-sm md:text-base ${popins.className} cursor-pointer hover:bg-[#c13939] transition-colors duration-200`}
        >
          View All Products
        </button>
      </div>
    </CommonHeading>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="size-[40px] md:size-[46px] bg-[#F5F5F5] rounded-full grid place-items-center cursor-pointer absolute right-0 top-[-35px] md:top-[-40px] z-10 hover:bg-gray-300 transition-colors duration-200 hidden md:grid"
      onClick={onClick}
    >
      <FaArrowRight className="text-sm md:text-base" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="size-[40px] md:size-[46px] bg-[#F5F5F5] rounded-full grid place-items-center cursor-pointer absolute right-[50px] md:right-[60px] top-[-35px] md:top-[-40px] z-10 hover:bg-gray-300 transition-colors duration-200 hidden md:grid"
      onClick={onClick}
    >
      <FaArrowLeft className="text-sm md:text-base" />
    </button>
  );
};

export const ProductCard = ({ element }) => {
  const { images, title, price } = element;
  const finalImage = images[0];
  const oldPrice = (price - (price * 10) / 100).toFixed(2);

  return (
    <div className="w-full max-w-[270px] mx-auto px-2">
      <div className="relative group">
        <div className="relative overflow-hidden rounded-lg bg-[#F5F5F5]">
          <Image
            width={270}
            height={250}
            src={finalImage}
            alt={title}
            className="w-full h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <button className="absolute bottom-0 w-full py-2 text-sm md:text-base bg-black text-white cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Add to cart
          </button>
        </div>

        <div className="absolute top-2 left-2 rounded-[4px] bg-[#DB4444] py-1 px-2 md:px-3 text-white text-xs">
          -10%
        </div>

        <div className="flex flex-col gap-2 absolute top-2 right-2">
          <button className="size-[30px] md:size-[34px] grid place-items-center rounded-full bg-white cursor-pointer hover:bg-gray-100 transition-colors duration-200 shadow-sm">
            <FaRegHeart className="text-xs md:text-sm" />
          </button>
          <button className="size-[30px] md:size-[34px] grid place-items-center rounded-full bg-white cursor-pointer hover:bg-gray-100 transition-colors duration-200 shadow-sm">
            <FaRegEye className="text-xs md:text-sm" />
          </button>
        </div>
      </div>

      <div className="pt-3 md:pt-4">
        <h2
          className={`text-sm md:text-base leading-[20px] md:leading-[24px] pb-2 line-clamp-2 ${popins.className}`}
        >
          {title}
        </h2>
        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
          <span
            className={`text-sm md:text-base text-[#DB4444] leading-[20px] md:leading-[24px] font-semibold ${popins.className}`}
          >
            ${oldPrice}
          </span>
          <del
            className={`text-sm md:text-base leading-[20px] md:leading-[24px] text-gray-500 ${popins.className}`}
          >
            ${price}
          </del>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
