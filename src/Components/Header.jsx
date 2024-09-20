import { GoBook } from 'react-icons/go';
import BgHeader from '../assets/bg-header.png';
import { FaRegMessage } from 'react-icons/fa6';

const Header = () => {
  return (
    <div className='relative pt-20 flex justify-center'>
      <div
        className='absolute inset-0 bg-center bg-no-repeat bg-cover blur-sm'
        style={{ backgroundImage: `url(${BgHeader})` }}
      ></div>
      <div className='max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10'>
        <div className='mr-auto place-self-center lg:col-span-7 text-center'>
          <h1 className='text-white text-center max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl'>
            Carlos Tech - Ahli Close Rasio Mobil, Motor, Alat Berat, dan
            Industri
          </h1>
          <p className='text-white max-w-2xl mb-6 font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-center'>
            Kami menyediakan layanan perawatan dan perbaikan terbaik untuk
            motor, mobil, sparepart alat berat, dan sparepart industri dengan
            teknologi manual dengan kepresisian tinggi dan tenaga ahli
            berpengalaman.
          </p>

          <a
            target='_blank'
            href='https://wa.me/6281226022666'
            className='bg-white text-black inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg hover:bg-boxdark hover:text-white'
          >
            Hubungi Penjual
            <FaRegMessage className='ml-2' />
          </a>
          <a
            target='_blank'
            href='https://drive.google.com/file/d/1VYpB9Odf5amG2nE6FxvkGhawyoQNUiOJ/view?usp=sharing'
            className='ml-5 bg-white text-black inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg hover:bg-boxdark hover:text-white'
          >
            Alur Pemesanan
            <GoBook className='ml-2' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
