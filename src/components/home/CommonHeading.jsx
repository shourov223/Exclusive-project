import { Inter, Poppins } from "next/font/google"

const popins = Poppins({
    weight: "600",
    subsets: ['latin']
})
const inter = Inter({
    weight: "600"
})
const CommonHeading = ({ children, heading, subHeading,padding_top }) => {
    return (
        <section style={{paddingTop : `${padding_top}`}}>
            <div className="container">
                <div>
                    <div className="flex items-center gap-4">
                        <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]">
                        </div>
                        <p className={`text-base ${popins.className} text-[#DB4444]`}>{subHeading}</p>
                    </div>
                    <div>
                        <h2 className={`text-[36px] ${inter.className} leading-[48px] pt-[24px]`}>{heading}</h2>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default CommonHeading
