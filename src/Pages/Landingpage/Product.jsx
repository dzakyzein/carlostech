import CardProduct from './CardProduct';

import Tracker from '../../assets/tracker.jpg';
import Tromol from '../../assets/tromol.jpg';
import Ratio from '../../assets/rasio-motor.jpg';

const Product = () => {
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
        <div className='flex flex-wrap'>
          <CardProduct
            CardTitle='Carlos Tech - Tracker Motor'
            type='Rasio Motor'
            CardDescription='Pelacak motor canggih dari Carlos Tech yang membantu Anda memantau dan melacak lokasi kendaraan Anda secara real-time untuk keamanan optimal.'
            image={Tracker}
          />
          <CardProduct
            CardTitle='Carlos Tech - Tromol Roda Motor'
            type='Rasio Motor'
            CardDescription='Tromol berkualitas tinggi dari Carlos Tech, dirancang untuk memberikan kinerja pengereman yang superior dan daya tahan maksimal untuk motor Anda.'
            image={Tromol}
          />
          <CardProduct
            CardTitle='Carlos Tech - Rasio Motor'
            type='Rasio Motor'
            CardDescription='Rasio motor presisi dari Carlos Tech yang memastikan efisiensi tenaga dan performa optimal untuk pengalaman berkendara yang lebih baik.'
            image={Ratio}
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
