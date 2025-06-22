// SectionMap.jsx
const SectionMap = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
          Lokasi Bengkel Kami
        </h2>
        <p className="text-primary text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          Temukan kami di lokasi berikut. Silakan kunjungi atau hubungi kami
          untuk informasi lebih lanjut mengenai layanan maupun pemesanan.
        </p>
        <div className="w-full h-[300px] md:h-[450px] overflow-hidden rounded-xl shadow-lg">
          <iframe
            title="Lokasi Bengkel Carlos Tech"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.061259038191!2d110.77906047794202!3d-7.568300672967784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a14356253e1a7%3A0xf754c7217fe1ff8e!2sCarlostech!5e0!3m2!1sen!2sid!4v1716355220163!5m2!1sen!2sid"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SectionMap;
