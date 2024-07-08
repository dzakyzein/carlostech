/* eslint-disable react/prop-types */
const CardProduct = ({ image, CardTitle, CardDescription, type }) => {
  return (
    <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
      <div className='mb-10 w-full'>
        <div className='mb-8 overflow-hidden rounded'>
          <img src={image} alt='' className='w-full' />
        </div>
        <div>
          <h3>
            <p className='mb-4 inline-block text-xl font-semibold text-dark sm:text-2xl lg:text-xl xl:text-2xl'>
              {CardTitle}
            </p>
          </h3>
          <span className='mb-5 inline-block rounded bg-sky-500 px-4 py-1 text-center text-xs font-semibold leading-loose text-white'>
            {type}
          </span>
          <p className='text-base text-body-color dark:text-dark-6'>
            {CardDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
