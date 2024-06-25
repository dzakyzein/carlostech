import Gear from '../assets/gear.png';
import { FaRegMessage } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='bg-black pt-20'>
      <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
            Carlos Tech - Ahli Close Rasio Mobil, Motor, Alat Berat, dan
            Industri
          </h1>
          <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            Kami menyediakan layanan perawatan dan perbaikan terbaik untuk
            motor, mobil, sparepart alat berat, dan sparepart industri dengan
            teknologi manual dengan kepresisian tinggi dan tenaga ahli
            berpengalaman.
          </p>
          <a
            href=''
            className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-teal-600 hover:bg-teal-800'
          >
            Coba sekarang!
            <FaArrowRight className='ml-2' />
          </a>
          <a
            target='_blank'
            href='https://wa.me/6281226022666'
            className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 hover:bg-boxdark'
          >
            Bicara dengan penjual
            <FaRegMessage className=' ml-2' />
          </a>
        </div>
        <div className='w-72 ml-32 hidden lg:mt-0 lg:col-span-5 lg:flex'>
          <img src={Gear} alt='mockup' />
        </div>
      </div>
    </div>
  );
};

export default Header;
