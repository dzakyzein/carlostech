const steps = [
  {
    title: "Konsultasi",
    description: "Hubungi kami dan diskusikan kebutuhan Anda.",
    icon: "📞",
  },
  {
    title: "Penawaran & Harga",
    description: "Kami akan memberikan estimasi biaya dan waktu pengerjaan.",
    icon: "💰",
  },
  {
    title: "Proses Produksi",
    description: "Produk mulai dikerjakan oleh tim kami.",
    icon: "⚙️",
  },
  {
    title: "Pengambilan / Kirim",
    description: "Barang selesai dan siap dikirim atau diambil.",
    icon: "📦",
  },
];

const StepProcess = () => {
  return (
    <section className="py-20 text-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Proses Pemesanan
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Inilah langkah-langkah untuk mewujudkan produk sesuai keinginan
            Anda.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0 text-6xl bg-white shadow-lg rounded-full w-24 h-24 flex items-center justify-center text-primary">
                {step.icon}
              </div>
              <div className="max-w-xl">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base text-justify">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepProcess;
