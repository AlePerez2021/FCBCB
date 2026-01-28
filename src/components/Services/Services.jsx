import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
    });
  }, []);

  const Img2 = "/coffee2.png";
  const ServicesData = [
    {
      id: 1,
      img: Img2,
      name: "Espresso",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
      aosDelay: "100",
    },
    {
      id: 2,
      img: Img2,
      name: "Americano",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
      aosDelay: "300",
    },
    {
      id: 3,
      img: Img2,
      name: "Cappuccino",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
      aosDelay: "500",
    },
  ];

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container mx-auto px-4">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-blue-600 hover:text-white relative shadow-xl duration-300 group max-w-[300px] w-full transition-all"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                    group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;