import Machine from '../../assets/machine.jpg';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const About = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen items-center bg-black'>
      <Navbar />
      <div className='flex flex-col items-center my-5 mt-20'>
        <h1 className='text-title-lg font-bold mb-4'>Tentang Carlos Tech</h1>
        <div className='flex flex-col items-center'>
          <div className='max-w-xl flex justify-center'>
            <img
              src={Machine}
              alt='Machine'
              className='max-w-full h-auto shadow-lg rounded-lg mb-4'
            />
          </div>
          <div>
            <p className='text-justify max-w-xl'>
              Carlos Tech adalah bengkel bubut yang mengkhususkan diri dalam
              pembuatan, perbaikan alat berat, gigi rasio motor, gigi rasio
              mobil, dan sparepart pabrik. Dengan pengalaman bertahun-tahun,
              kami menjadi pilihan utama bagi pelanggan yang membutuhkan solusi
              teknik handal. Layanan kami berkualitas dan terpercaya, didukung
              oleh tim ahli berpengalaman. Dengan komitmen kami, CarlosTech
              hadir untuk memastikan kinerja optimal dan keandalan peralatan
              Anda.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
