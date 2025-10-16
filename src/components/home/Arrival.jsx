import CommonHeading from "./CommonHeading";
import parfume from "../../assets/parfume.png";
import girl from "../../assets/girl.png";
import ps5 from "../../assets/ps5.png";
import speaker from "../../assets/speaker.png";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});

const Arrival = () => {
  return (
    <CommonHeading
      heading={"New Arrival"}
      subHeading={"Featured"}
      padding_top={"100px"}
    >
      <div className="flex flex-col lg:flex-row items-center gap-[20px] md:gap-[30px] pt-[40px] md:pt-[60px] px-[16px] md:px-[0px]">
        <div className="w-full lg:w-[570px] h-[300px] md:h-[400px] lg:h-[600px] relative">
          <p
            className={`absolute bottom-[20px] md:bottom-[40px] lg:bottom-[72px] left-[20px] md:left-[32px] text-white z-10 ${inter.className} text-[16px] md:text-[20px] lg:text-[24px] leading-[24px]`}
          >
            PlayStation 5
          </p>
          <Image
            style={{ background: "black" }}
            src={ps5}
            alt="PlayStation 5"
            width={570}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center gap-[16px] md:gap-[24px] lg:gap-[32px] w-full lg:w-auto">
          <div className="w-full lg:w-[570px] h-[200px] md:h-[284px] relative">
            <Image
              src={girl}
              alt="Women's Collections"
              width={570}
              height={284}
              className="w-full h-full object-cover"
            />
            <p
              className={`absolute bottom-[20px] md:bottom-[30px] lg:bottom-[40px] left-[20px] md:left-[32px] text-white z-10 ${inter.className} text-[16px] md:text-[20px] lg:text-[24px] leading-[24px]`}
            >
              Women's Collections
            </p>
          </div>

          <div className="flex items-center gap-[12px] md:gap-[20px] lg:gap-[30px] w-full lg:w-auto">
            <div className="relative w-full md:w-[270px] h-[200px] md:h-[284px]">
              <Image
                src={speaker}
                alt="Speakers"
                width={270}
                height={284}
                className="w-full h-full object-cover"
              />
              <p
                className={`absolute bottom-[20px] md:bottom-[30px] lg:bottom-[40px] left-[16px] md:left-[32px] text-white z-10 ${inter.className} text-[14px] md:text-[18px] lg:text-[24px] leading-[24px]`}
              >
                Speakers
              </p>
            </div>

            <div className="relative w-full md:w-[270px] h-[200px] md:h-[284px]">
              <Image
                src={parfume}
                alt="Perfume"
                width={270}
                height={284}
                className="w-full h-full object-cover"
              />
              <p
                className={`absolute bottom-[20px] md:bottom-[30px] lg:bottom-[40px] left-[16px] md:left-[32px] text-white z-10 ${inter.className} text-[14px] md:text-[18px] lg:text-[24px] leading-[24px]`}
              >
                Perfume
              </p>
            </div>
          </div>
        </div>
      </div>
    </CommonHeading>
  );
};

export default Arrival;