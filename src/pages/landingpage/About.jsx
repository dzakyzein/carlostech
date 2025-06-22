import Machine from "../../assets/machine.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import LandingLayout from "./layout/LandingLayout";

const About = () => {
  return (
    <LandingLayout>
      <div className='flex flex-col justify-between min-h-screen items-center text-primary'>
        <Navbar />
        <div className='flex flex-col items-center my-5 mt-20 p-4'>
          <h1 className='text-title-lg font-bold mb-10 text-center'>
            Tentang Carlos Tech
          </h1>
          <div className='flex flex-col items-center md:flex-row md:items-start md:justify-center'>
            <div className='max-w-[39.5rem] flex justify-center mb-4 md:mb-0'>
              <img
                src={Machine}
                alt='Machine'
                className='w-auto h-auto shadow-lg rounded-lg'
              />
            </div>
            <div className='mt-4 md:mt-0 md:ml-10 max-w-xl'>
              <p className='text-justify'>
                Carlos Tech didirikan pada tahun 2004 dengan hanya dua karyawan
                dan satu mesin. Sebelum mendirikan bengkel ini, pemiliknya
                mengalami perjalanan panjang mulai dari tahun 1991 setelah
                berhenti dari pekerjaan di bengkel saudaranya sendiri. Awalnya,
                pemilik memulai bekerja sama dengan tempat dari salah satu SMK
                di Solo untuk membangun bengkel mesin kecil. Pada tahun 2004,
                bengkel ini akhirnya mampu membangun fasilitasnya sendiri dan
                mengoperasikan satu mesin. Meskipun dimulai dengan peralatan
                yang sederhana, Carlos Tech fokus pada permesinan untuk
                menghasilkan produk seperti set gear box dan sprocket yang
                diperlukan dalam industri alat berat dan otomotif. Nama
                &quot;Carlos&quot; dipilih sebagai penghormatan kepada tim sepak
                bola kampung dari daerah Jajar, yang sangat dicintai oleh
                pemilik. Meskipun banyak pelanggan awalnya mengira
                &quot;Carlos&quot; adalah nama pemilik bengkel, sebenarnya ini
                adalah simbol kecintaan dan dedikasi terhadap warisan lokal.
                Tambahan &quot;Tech&quot; dalam nama bengkel ini mencerminkan
                komitmen mereka terhadap teknologi dan inovasi dalam industri
                motor yang terus berkembang. Sejak berdirinya, Carlos Tech terus
                mengalami pertumbuhan yang signifikan dan telah membangun
                reputasi sebagai penyedia solusi teknik handal dengan layanan
                berkualitas dan didukung oleh tim ahli berpengalaman.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </LandingLayout>
  );
};

export default About;
