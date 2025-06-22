import { useEffect, useState } from "react";
import axios from "axios";
import CardProduct from "./CardProduct";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { BACKEND_URL, IMAGE_BACKEND_URL } from "../../Constants";

const Product = () => {
  const [tools, setTools] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/v1/tools`);
        setTools(res.data.data);
      } catch (error) {
        console.error("Gagal mengambil data tools:", error);
      }
    };

    fetchTools();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (currentIndex < tools.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const visibleTools = tools.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className='bg-white py-16 relative text-primary'>
      <div className='container mx-auto px-4 max-w-7xl'>
        <div className='mb-12 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
            Produk yang Bisa Kami Buatkan
          </h2>
          <p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto'>
            Kami menerima berbagai pesanan pembuatan dan perbaikan untuk
            keperluan otomotif, alat berat, hingga mesin industri.
          </p>
        </div>

        <div className='relative'>
          {/* Tombol Kiri */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className={`absolute top-[45%] left-0 -translate-y-1/2 -ml-4 z-10 text-3xl bg-white rounded-full p-2 shadow-md ${
              currentIndex === 0
                ? "text-gray-300 cursor-not-allowed"
                : "text-black"
            }`}
          >
            <MdNavigateBefore />
          </button>

          {/* Grid Card Product */}
          <div className='flex flex-wrap justify-center -mx-4'>
            {visibleTools.map((tool, index) => (
              <div
                key={tool.id}
                data-aos='fade-up'
                data-aos-delay={index * 300}
                data-aos-duration='900'
                className='w-full px-4 md:w-1/2 lg:w-1/3'
              >
                <CardProduct
                  image={`${IMAGE_BACKEND_URL}${tool.imageUrl}`}
                  title={tool.title}
                  description={tool.description}
                  type={tool.type}
                />
              </div>
            ))}
          </div>

          {/* Tombol Kanan */}
          <button
            onClick={next}
            disabled={currentIndex >= tools.length - itemsPerPage}
            className={`absolute top-[45%] right-0 -translate-y-1/2 -mr-4 z-10 text-3xl bg-white rounded-full p-2 shadow-md ${
              currentIndex >= tools.length - itemsPerPage
                ? "text-gray-300 cursor-not-allowed"
                : "text-black"
            }`}
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
