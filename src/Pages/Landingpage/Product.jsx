import CardProduct from './CardProduct';

const Product = () => {
  return (
    <section className='bg-black pb-10 pt-20 lg:pb-20 lg:pt-[120px]'>
      <div className='container lg:px-10'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20'>
              {/* <span className='mb-2 block text-lg font-semibold text-primary'>
                Our Blogs
              </span> */}
              <h2 className='mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]'>
                Produk Terbaik
              </h2>
              <p className='text-base text-body-color dark:text-dark-6'>
                Kami menawarkan produk dan layanan terbaik untuk motor, mobil,
                alat berat, dan mesin industri dengan kualitas unggulan dan
                keandalan tinggi.
              </p>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap'>
          <CardProduct
            date='Dec 22, 2023'
            CardTitle='Meet AutoManage, the best AI management tools'
            CardDescription='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            image='https://i.ibb.co/Cnwd4q6/image-01.jpg'
          />
          <CardProduct
            date='Dec 22, 2023'
            CardTitle='Meet AutoManage, the best AI management tools'
            CardDescription='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            image='https://i.ibb.co/Y23YC07/image-02.jpg'
          />
          <CardProduct
            date='Dec 22, 2023'
            CardTitle='Meet AutoManage, the best AI management tools'
            CardDescription='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            image='https://i.ibb.co/7jdcnwn/image-03.jpg'
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
