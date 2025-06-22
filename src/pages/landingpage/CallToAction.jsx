import { useNavigate } from "react-router-dom";
import ctaImage from "../../assets/CTA.png";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Siap Membuat Alat Anda?
          </h2>
          <p className="text-primary text-base sm:text-lg mb-6">
            Jangan tunda lagi. Konsultasikan kebutuhan Anda kepada kami dan
            dapatkan solusi terbaik untuk industri Anda.
          </p>
          <button
            onClick={() => navigate("/pemesanan")}
            className="bg-primary text-white hover:bg-sky-700 transition px-6 py-3 rounded-full text-sm sm:text-base font-medium"
          >
            Pesan Sekarang
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={ctaImage}
            alt="CTA Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
