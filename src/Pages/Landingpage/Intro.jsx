//icons
import { FaCheck } from 'react-icons/fa6';

import Introduction from '../../assets/intro.jpg';

const Intro = () => {
  return (
    <div className='container mx-auto md:px-6'>
      <section className='text-center lg:text-left'>
        <div className='py-12 md:px-12'>
          <div className='container mx-auto xl:px-32'>
            <div className='w-auto grid items-center lg:grid-cols-2'>
              <div className='mb-12 md:mt-12 lg:mt-0 lg:mb-0'>
                <div className='relative z-1 block rounded-lg bg-black bg-opacity-20 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14'>
                  <h2 className='mb-6 text-3xl font-bold'>
                    Why is it so great?
                  </h2>
                  <p className='mb-8 text-neutral-500 dark:text-neutral-300'>
                    Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                    neque iaculis malesuada. Aenean gravida magna orci, non
                    efficitur est porta id. Donec magna diam.
                  </p>

                  <div className='grid gap-x-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3'>
                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Support
                      </p>
                    </div>

                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Analytics
                      </p>
                    </div>

                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Components
                      </p>
                    </div>
                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Updates
                      </p>
                    </div>

                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Reports
                      </p>
                    </div>

                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Mobile
                      </p>
                    </div>
                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Modules
                      </p>
                    </div>

                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Blocks
                      </p>
                    </div>

                    <div className='mb-6'>
                      <p className='flex items-center'>
                        <FaCheck className='m-2' />
                        Templates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='md:mb-12 lg:mb-0'>
                <img
                  src={Introduction}
                  className='rotate-lg-6 w-4/5 rounded-lg shadow-lg'
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
