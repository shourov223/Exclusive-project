"use client";
import React from "react";
import CommonHeading from "./CommonHeading";
import Image from "next/image";
import beauty from "../../assets/beauty.svg";
import groceries from "../../assets/groceries.svg";
import furniture from "../../assets/furniture.svg";
import perfume from "../../assets/perfume.svg";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const categories = [
  {
    id: 1,
    image: beauty,
    title: "beauty",
  },
  {
    id: 2,
    image: groceries,
    title: "groceries",
  },
  {
    id: 3,
    image: furniture,
    title: "Furniture",
  },
  {
    id: 4,
    image: perfume,
    title: "perfume",
  },
];

const Category = () => {
  return (
    <CommonHeading
      heading="Browse By Category"
      subHeading="Categories"
      padding_top="80px"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-[30px] pt-8 md:pt-12 lg:pt-[60px] px-4 sm:px-0">
        {categories.map((item) => (
          <CategoryItem key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </CommonHeading>
  );
};

const CategoryItem = ({ image, title }) => {
  return (
    <div
      className={`
        w-full aspect-[1.17/1] 
        flex flex-col items-center justify-center gap-3 md:gap-4
        border border-black/20 rounded-lg
        bg-white
        transition-all duration-300 ease-in-out
        hover:border-black/40 hover:shadow-lg hover:-translate-y-1
        active:scale-95
        cursor-pointer
        group
        ${poppins.className}
      `}
    >
      <div className="transition-transform duration-300 group-hover:scale-110">
        <Image
          width={56}
          height={56}
          src={image}
          alt={`${title} category icon`}
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
          priority={false}
        />
      </div>
      <p className="text-sm sm:text-base font-medium text-gray-800 text-center px-2 group-hover:text-black transition-colors">
        {title}
      </p>
    </div>
  );
};

export default Category;
