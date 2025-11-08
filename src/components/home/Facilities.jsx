import Image from "next/image";
import service_1 from "../../assets/service_1.svg";
import service_2 from "../../assets/service_2.svg";
import service_3 from "../../assets/service_3.svg";
import { Poppins } from "next/font/google";

const popins = Poppins({
  weight: "600",
});

const serviceArry = [
  {
    image: service_1,
    title: "FREE AND FAST DELIVERY",
    text: "Free delivery for all orders over $140",
  },
  {
    image: service_2,
    title: "24/7 CUSTOMER SERVICE",
    text: "Friendly 24/7 customer support",
  },
  {
    image: service_3,
    title: "MONEY BACK GUARANTEE",
    text: "We reurn money within 30 days",
  },
];

const Facilities = () => {
  return (
    <section className="pt-[70px]">
      <div className="container">
        <div className="px-[114px] flex items-center gap-[88px]">
          {serviceArry.map((item, index) => {
            return (
              <Box
                key={index}
                img={item.image}
                text={item.text}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Box = ({ img, title, text }) => {
  return (
    <div className="max-w-[250px] flex items-center flex-col gap-[8px] text-center">
      <div>
        <Image src={img} alt="image" />
      </div>
      <h3
        className={`text-[20px] leading-[28px] ${popins.className} text-black whitespace-nowrap`}
      >
        {title}
      </h3>
      <p className={`text-[14px] leading-[21px] ${popins.className}`}>{text}</p>
    </div>
  );
};
export default Facilities;
