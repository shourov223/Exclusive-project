"use client"
import Link from "next/link";
import {useContext} from "react";
import {ProductContext} from "@/context/ProductContext";
import {Poppins} from "next/font/google"
import Image from "next/image";
import {ChevronDown, ChevronUp} from "lucide-react";
const Popins = Poppins({
    weight : "400"
})

const Page = (props) => {
    const {products} = useContext(ProductContext)
    return (
        <section className={"py-[120px]"}>
            <div className={"container"}>
                <div className={"flex items-center gap-3 pb-20"}>
                    <Link className={`${Popins.className} text-[14px] leading-[21px] text-black/600`} href={"/"}>Home</Link>
                    /
                    <span className={`${Popins.className} text-[14px] leading-[21px] text-black`}>Cart</span>
                </div>
                <div>
                    <div className={"py-6  px-10 shadow-xl rounded-[4px] grid items-center justify-between grid-cols-[300px_300px_300px_300px]"}>
                        <span className={`text-base leading-[21px] text-black ${Popins.className}`}>Product</span>
                        <span className={`text-base leading-[21px] text-black ${Popins.className}`}>Price</span>
                        <span className={`text-base leading-[21px] text-black ${Popins.className}`}>Quantity</span>
                        <span className={`text-base leading-[21px] text-black ${Popins.className}`}>Subtotal</span>
                    </div>
                    <div>
                        {
                            products.map((item)=> {

                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};

const CartList = ({image,title,price})=>{
    return (
        <div className={"py-6  px-10 shadow-xl rounded-[4px] grid items-center justify-between grid-cols-[300px_300px_300px_300px]"}>
            <div className={"flex items-center gap-[20px]"}>
                <Image src={image} alt={"Image"}/>
                <p className={`text-base text-black leading-[24px] ${Popins.className}`}>{title}</p>
            </div>
            <p className={`text-base text-black leading-[24px] ${Popins.className}`}>${price}</p>
            <div className={"flex items-center gap-4 py-[6px] px-3 rounded-[4px] border border-black/40"}>
                <span>0</span>
                <div>
                    <ChevronUp size={16} strokeWidth={1.25} />
                    <ChevronDown size={16} strokeWidth={1.25} />
                </div>
            </div>
            <div></div>
        </div>
    )
}
export default Page;