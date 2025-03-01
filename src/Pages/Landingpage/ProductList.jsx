/* eslint-disable no-unused-vars */
import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const ProductList = () => {
  return (
    <section className='text-white pb-10 pt-15 lg:pb-20 lg:pt-[120px] mx-4'>
      <div className='container lg:px-10 max-w-7xl mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 xsm:mx-4 md:flex flex-col justify-center'>
            <div className='mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20'>
              <h2 className='mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px]'>
                List Produk
              </h2>
              <p className='text-lg text-white'>
                Produk-produk di bawah ini tersedia dan dapat dipesan sesuai
                dengan kebutuhan Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Grid Item 1 */}
          <div
            className='p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white text-black'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-delay='200'
          >
            <h3 className='text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-200 shadow-sm'>
              Mesin Motor
            </h3>
            <ul className='list-disc list-inside space-y-2 '>
              <li className='flex'>
                <FaCheck className='mt-1 mr-2' />
                Adaptor Noken As
              </li>
              <li className='flex'>
                <FaCheck className='mt-1 mr-2' />
                Packing Blok
              </li>
              <li className='flex'>
                <FaCheck className='mt-1 mr-2' />
                Packing Knalpot
              </li>
              <li className='flex'>
                <FaCheck className='mt-1 mr-2' />
                Tutup Klep / Simer
              </li>
            </ul>
          </div>

          {/* Grid Item 2 */}
          <div
            className='p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white text-black'
            data-aos='fade-up'
            data-aos-duration='2000'
            data-aos-delay='400'
          >
            <h3 className='text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-200 shadow-sm'>
              Mesin Mobil
            </h3>
            <ul className='list-disc list-inside space-y-2 '>
              <li className='flex'>
                <FaCheck className='mt-1 mr-2' />
                Gigi Rasio Mobil
              </li>
            </ul>
          </div>

          {/* Grid Item 3 */}
          <div
            className='p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white text-black'
            data-aos='fade-up'
            data-aos-duration='3000'
            data-aos-delay='600'
          >
            <h3 className='text-2xl font-semibold mb-4 pb-2 border-b-2 border-gray-200 shadow-sm'>
              Mesin Industri
            </h3>
            <ul className='list-disc list-inside space-y-2 '>
              <li className='flex'>
                <FaCheck className='mt-1 mr-2' />
                Aneka Gear Industri
              </li>
              <li className='flex'>
                <FaCheck className='mt-1 mr-2' />
                Pinion Cage
              </li>
              <li className='flex'>
                <FaCheck className='mt-1 mr-2' />
                Shaft Cone Drum
              </li>
              <li className='flex'>
                <FaCheck className='mt-1 mr-2' />
                Tension Element
              </li>
              <li className='flex'>
                <FaCheck className='mt-1 mr-2' />
                Dan Lain - Lain
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
