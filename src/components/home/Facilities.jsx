import Image from "next/image";
import service_1 from "../../assets/service_1.svg";
import service_2 from "../../assets/service_2.svg";
import service_3 from "../../assets/service_3.svg";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const SERVICE_ITEMS = [
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
    text: "We return money within 30 days",
  },
];

const Facilities = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {SERVICE_ITEMS.map((item, index) => (
            <ServiceBox
              key={index}
              img={item.image}
              text={item.text}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceBox = ({ img, title, text }) => {
  return (
    <div className="flex flex-col items-center gap-3 md:gap-4 text-center">
      <div className="mb-2">
        <Image src={img} alt={title} className="w-16 h-16 md:w-20 md:h-20" />
      </div>
      <h3
        className={`${poppins.className} text-lg md:text-xl font-semibold text-black`}
      >
        {title}
      </h3>
      <p className={`${poppins.className} text-sm text-gray-600`}>{text}</p>
    </div>
  );
};

export default Facilities;
