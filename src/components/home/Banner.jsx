"use client"
import { ProductContext } from "@/context/ProductContext"
import { Poppins } from "next/font/google"
import { useContext } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const popins = Poppins({ weight: "400", subsets: ["latin"] })

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const { products } = useContext(ProductContext)
    const category = [...new Set(products.map(p => p.category))]


    return (
        <section className="pt-16 md:pt-20 lg:pt-[100px] px-4 sm:px-6 lg:px-0">
            <div className="container">
                <div className='grid grid-cols-1 xl:grid-cols-[217px_1fr] gap-6 lg:gap-[30px]'>
                    <ul className="hidden xl:flex flex-col gap-4 overflow-x-auto h-[344px]">
                        {
                            category.map((item, index) => {
                                return (
                                    <li
                                        className={`text-sm xl:text-base leading-[24px] text-black ${popins.className} cursor-pointer hover:text-red-500 transition-colors`}
                                        key={index}
                                    >
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className="w-full mx-auto max-w-full lg:max-w-[892px]">
                        <Slider {...settings}>
                            {[1, 2, 3, 4, 5].map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="bannerBg h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg"></div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>

                <div className="xl:hidden mt-6 overflow-x-auto">
                    <ul className="flex gap-4 pb-2">
                        {
                            category.map((item, index) => {
                                return (
                                    <li
                                        className={`text-sm whitespace-nowrap px-4 py-2 bg-gray-100 rounded-full text-black ${popins.className} cursor-pointer hover:bg-gray-200 transition-colors`}
                                        key={index}
                                    >
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Banner