/* eslint-disable react/prop-types */
import CardProduct from './CardProduct';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3 items

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Satu item untuk mobile
      } else {
        setItemsPerPage(3); // Tiga item untuk tampilan yang lebih besar
      }
    };

    handleResize(); // Set initial items per page
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize); // Clean up listener
  }, []);

  const next = () => {
    if (currentIndex < items.length - itemsPerPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className='relative'>
      <div className='flex flex-wrap'>
        {items.slice(currentIndex, currentIndex + itemsPerPage).map((item) => (
          <CardProduct
            key={item.id}
            Title={item.title}
            Type={item.type}
            Description={item.description}
            Image={`http://localhost:3000${item.imageUrl}`}
          />
        ))}
      </div>

      {/* Tombol navigasi kiri */}
      <button
        onClick={prev}
        disabled={currentIndex === 0}
        className={`absolute top-44 my-auto left-0 transform -translate-y-1/2 text-2xl bg-white rounded-full p-2 shadow-md ${
          currentIndex === 0 ? 'text-gray-400' : 'text-black'
        }`}
      >
        <MdNavigateBefore />
      </button>

      {/* Tombol navigasi kanan */}
      <button
        onClick={next}
        disabled={currentIndex >= items.length - itemsPerPage}
        className={`absolute top-44 my-auto right-0 transform -translate-y-1/2 text-2xl bg-white rounded-full p-2 shadow-md ${
          currentIndex >= items.length - itemsPerPage
            ? 'text-gray-400'
            : 'text-black'
        }`}
      >
        <MdNavigateNext />
      </button>
    </div>
  );
};

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'http://api.carlostech.id/api/v1/tools'
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching the products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className='text-black pb-10 pt-15 lg:pb-20 lg:pt-[120px]'>
      <div className='container lg:px-10'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 xsm:mx-4 md:flex flex-col justify-center'>
            <div className='mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20'>
              <h2 className='mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px]'>
                Produk Terbaik
              </h2>
              <p className='text-xl'>
                Kami menawarkan produk dan layanan terbaik untuk motor, mobil,
                alat berat, dan mesin industri dengan kualitas unggulan dan
                keandalan tinggi.
              </p>
            </div>
          </div>
        </div>
        <Carousel items={products} />
      </div>
    </section>
  );
};

export default Product;
