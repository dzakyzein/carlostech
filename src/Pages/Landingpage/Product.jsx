import CardProduct from './CardProduct';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Ganti URL_API dengan URL endpoint API Anda
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/tools');
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching the products', error);
      }
    };

    fetchProducts();
  }, []);

  const renderSlides = () => {
    const slides = [];
    for (let i = 0; i < products.length; i += 3) {
      slides.push(
        <div className='flex' key={i}>
          {products.slice(i, i + 3).map((tool) => (
            <CardProduct
              key={tool.id}
              Title={tool.title}
              Type={tool.type}
              Description={tool.description}
              Image={`http://localhost:3000${tool.imageUrl}`}
            />
          ))}
        </div>
      );
    }
    return slides;
  };

  return (
    <section className='text-black pb-10 pt-15 lg:pb-20 lg:pt-[120px] '>
      <div className='container lg:px-10'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 xsm:mx-4 md:flex flex-col justify-center'>
            <div className='mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20'>
              {/* <span className='mb-2 block text-lg font-semibold text-primary'>
                Our Blogs
              </span> */}
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
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
          {renderSlides()}
        </Carousel>
      </div>
    </section>
  );
};

export default Product;
