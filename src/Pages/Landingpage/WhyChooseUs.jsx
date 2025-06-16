const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Lebih dari 20 Tahun Pengalaman",
      description:
        "Sejak 2004, kami telah melayani kebutuhan pembuatan dan perbaikan untuk alat berat, otomotif, dan industri dengan dedikasi tinggi.",
    },
    {
      title: "Spesialisasi Alat Berat & Otomotif",
      description:
        "Kami fokus menangani gear, sprocket, dan komponen mesin industri – bukan bengkel biasa, tapi mitra teknik andal.",
    },
    {
      title: "Kualitas Hasil Kerja Terbukti",
      description:
        "Meski menggunakan mesin manual, ketelitian dan presisi tetap kami utamakan. Banyak pelanggan kembali karena puas.",
    },
    {
      title: "Pelayanan Fleksibel & Bersahabat",
      description:
        "Kami mengutamakan kenyamanan pelanggan dengan pendekatan komunikasi yang terbuka dan bisa disesuaikan.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-primary text-base md:text-lg">
            Kami bukan sekadar bengkel – kami adalah mitra teknik terpercaya.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-primary p-6 shadow-md rounded-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">
                {reason.title}
              </h3>
              <p className="text-sm md:text-base text-primary text-justify">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
