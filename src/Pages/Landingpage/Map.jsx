/* eslint-disable no-unused-vars */
import React from 'react';

const Map = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen space-y-4'>
      <h1 className='text-3xl font-bold mb-8'>Lokasi Carlos Tech</h1>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.061259038191!2d110.77906047794202!3d-7.568300672967784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14356253e1a7%3A0xf754c7217fe1ff8e!2sCarlostech!5e0!3m2!1sen!2sid!4v1716355220163!5m2!1sen!2sid'
        className='border-0 w-full h-3/4 xsm:w-4/5 md:w-3/4 md:h-3/4 lg:w-1/2 lg:h-1/2'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default Map;
