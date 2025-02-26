//icons
import { FaCheck } from 'react-icons/fa6';

import Introduction from '../../assets/intro.jpg';

const Intro = () => {
  return (
    <div className='container mx-auto md:px-6 text-white'>
      <section className='text-center lg:text-left'>
        <div className='py-12 md:px-12'>
          <div className='container mx-auto xl:px-32'>
            <div className='w-auto grid items-center lg:grid-cols-2'>
              <div
                className='mb-12 md:mt-12 lg:mt-0 lg:mb-0'
                data-aos='fade-up'
              >
                <div className='relative z-1 block rounded-lg  px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14'>
                  <h2 className='mb-6 text-3xl font-bold'>
                    Kenapa harus Carlos Tech?
                  </h2>
                  <p className='mb-8 text-justify'>
                    Carlos Tech adalah pilihan utama untuk pembuatan rasio motor
                    dan rasio mobil, serta kebutuhan sparepart pabrik dan alat
                    berat Anda. Menggunakan mesin manual dengan keahlian tinggi,
                    kami memberikan hasil yang presisi dan berkualitas tinggi.
                    Dengan pelayanan cepat dan andal, kami memastikan performa
                    optimal untuk kendaraan Anda dan efisiensi maksimal untuk
                    peralatan industri Anda. Percayakan kepada Carlos Tech untuk
                    solusi yang terpercaya dan profesional.
                  </p>
                  <div className='grid gap-x-6 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3'>
                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Rasio Motor
                      </p>
                    </div>

                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Rasio Mobil
                      </p>
                    </div>

                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Sparepart Pabrik
                      </p>
                    </div>

                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Alat Berat
                      </p>
                    </div>

                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Mesin Manual
                      </p>
                    </div>

                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Durabilitas
                      </p>
                    </div>

                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Kualitas Terbaik
                      </p>
                    </div>

                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Pelayanan Cepat
                      </p>
                    </div>

                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Solusi Terpercaya
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hidden md:flex justify-center lg:mb-0'>
                <img
                  src={Introduction}
                  className='rotate-lg-6 w-4/5 rounded-lg shadow-lg mr-10'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
