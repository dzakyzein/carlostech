import { FaRegMessage } from "react-icons/fa6";
import SplitText from "./Animation/SplitText";

const Header = () => {
  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage: "url('src/assets/bg-header1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-16 mx-auto flex items-center">
        <div className="text-left max-w-2xl text-white">
          <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <SplitText text="Bengkel Carlos Tech" />
          </h1>
          <p className="mb-10 text-base sm:text-lg md:text-xl font-light leading-relaxed">
            Kami menyediakan layanan perawatan dan perbaikan terbaik untuk
            motor, mobil, sparepart alat berat, dan sparepart industri dengan
            teknologi manual dengan kepresisian tinggi dan tenaga ahli
            berpengalaman.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/6281226022666"
              className="bg-primary text-white inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium border border-primary rounded-lg hover:bg-white hover:text-primary transition"
            >
              Hubungi Penjual <FaRegMessage className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
