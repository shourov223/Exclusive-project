"use client";
import React, { useContext, useState } from "react";
import CommonHeading from "./CommonHeading";
import { ProductContext } from "@/context/ProductContext";
import { ProductCard } from "./FlashSale";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const BestSellings = () => {
  const { products } = useContext(ProductContext);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const handleViewAll = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(products.length);
      setIsLoading(false);
    }, 300);
  };

  const handleViewLess = () => {
    setVisibleCount(4);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const displayedProducts = products.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < products.length;

  return (
    <CommonHeading
      heading={"Best Selling Products"}
      subHeading={"This Month"}
      padding_top={"70px"}
    >
      <div className="pt-10 sm:pt-12 md:pt-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-[30px]">
          {displayedProducts.map((item, index) => (
            <div
              key={item.id || index}
              className="animate-fadeIn"
              style={{ animationDelay: `${(index % 4) * 50}ms` }}
            >
              <ProductCard element={item} />
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-gray-500 text-lg ${poppins.className}`}>
              No products available at the moment
            </p>
          </div>
        )}

        {products.length > 0 && (
          <div className="pt-8 sm:pt-10 md:pt-[40px] flex justify-center">
            {hasMoreProducts ? (
              <button
                onClick={handleViewAll}
                disabled={isLoading}
                className={`py-3 sm:py-4 px-8 sm:px-12 md:px-[48px] bg-[#DB4444] hover:bg-[#c13939] active:bg-[#a83232] disabled:bg-gray-400 disabled:cursor-not-allowed rounded-[4px] text-white text-sm sm:text-base ${poppins.className} transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0`}
                aria-label="View all products"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Loading...
                  </span>
                ) : (
                  `View All Products (${products.length})`
                )}
              </button>
            ) : (
              <button
                onClick={handleViewLess}
                className={`py-3 sm:py-4 px-8 sm:px-12 md:px-[48px] bg-gray-600 hover:bg-gray-700 active:bg-gray-800 rounded-[4px] text-white text-sm sm:text-base ${poppins.className} transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0`}
                aria-label="Show less products"
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </CommonHeading>
  );
};

export default BestSellings;
