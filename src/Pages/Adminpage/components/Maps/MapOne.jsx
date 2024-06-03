const MapOne = () => {
  return (
    <div className='col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7'>
      <h4 className='mb-2 text-xl font-semibold text-black dark:text-white'>
        Carlos Tech Location
      </h4>
      <div className='w-full h-full'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.061259038191!2d110.77906047794202!3d-7.568300672967784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14356253e1a7%3A0xf754c7217fe1ff8e!2sCarlostech!5e0!3m2!1sen!2sid!4v1716355220163!5m2!1sen!2sid'
          className='border-0 w-full h-[500px]'
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
};

export default MapOne;
