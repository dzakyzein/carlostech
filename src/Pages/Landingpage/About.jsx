import Machine from '../../assets/machine.jpg';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const About = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen items-center bg-white text-black'>
      <Navbar />
      <div className='flex flex-col items-center my-5 mt-20'>
        <h1 className='text-title-lg font-bold mb-10'>Tentang Carlos Tech</h1>
        <div className='flex items-center'>
          <div className='max-w-[39.5rem] flex justify-center'>
            <img
              src={Machine}
              alt='Machine'
              className='w-auto h-auto shadow-lg rounded-lg mb-4'
            />
          </div>
          <div className='ml-10'>
            <p className='text-justify max-w-xl'>
              Carlos Tech didirikan pada tahun 2004 dengan hanya dua karyawan
              dan satu mesin. Sebelum mendirikan bengkel ini, pemiliknya
              mengalami perjalanan panjang mulai dari tahun 1991 setelah
              berhenti dari pekerjaan di bengkel saudaranya sendiri. Awalnya,
              pemilik memulai bekerja sama dengan tempat dari salah satu SMK di
              Solo untuk membangun bengkel mesin kecil. Pada tahun 2004, bengkel
              ini akhirnya mampu membangun fasilitasnya sendiri dan
              mengoperasikan satu mesin. Meskipun dimulai dengan peralatan yang
              sederhana, Carlos Tech fokus pada permesinan untuk menghasilkan
              produk seperti set gear box dan sprocket yang diperlukan dalam
              industri alat berat dan otomotif. Nama &quot;Carlos&quot; dipilih
              sebagai penghormatan kepada tim sepak bola kampung dari daerah
              Jajar, yang sangat dicintai oleh pemilik. Meskipun banyak
              pelanggan awalnya mengira &quot;Carlos&quot; adalah nama pemilik
              bengkel, sebenarnya ini adalah simbol kecintaan dan dedikasi
              terhadap warisan lokal. Tambahan &quot;Tech&quot; dalam nama
              bengkel ini mencerminkan komitmen mereka terhadap teknologi dan
              inovasi dalam industri motor yang terus berkembang. Sejak
              berdirinya, Carlos Tech terus mengalami pertumbuhan yang
              signifikan dan telah membangun reputasi sebagai penyedia solusi
              teknik handal dengan layanan berkualitas dan didukung oleh tim
              ahli berpengalaman.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
