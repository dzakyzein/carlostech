import { FaTools, FaCogs, FaIndustry } from "react-icons/fa";

const services = [
  {
    icon: <FaTools className="text-4xl text-primary" />,
    title: "Perbaikan Alat Berat",
    description:
      "Kami menangani perbaikan alat berat seperti gearbox, sprocket, dan komponen industri lainnya dengan presisi tinggi.",
  },
  {
    icon: <FaCogs className="text-4xl text-primary" />,
    title: "Servis Motor & Mobil",
    description:
      "Layanan servis untuk motor dan mobil termasuk penggantian part, perakitan gigi rasio, dan peningkatan performa.",
  },
  {
    icon: <FaIndustry className="text-4xl text-primary" />,
    title: "Sparepart Industri",
    description:
      "Pembuatan dan perakitan sparepart untuk kebutuhan industri, termasuk mesin produksi dan alat pabrik.",
  },
];

const MainServices = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12">
          Layanan Utama Kami
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-primary text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-primary text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
