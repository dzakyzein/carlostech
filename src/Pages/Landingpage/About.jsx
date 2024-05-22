import Machine from '../../assets/machine.jpg';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const About = () => {
  return (
    <div className='flex flex-col items-center bg-black'>
      <Navbar />
      <div className='flex flex-col items-center my-5'>
        <h1 className='text-2xl font-bold mb-4'>About Carlos Tech</h1>
        <div className='flex flex-col items-center'>
          <div className='max-w-3xl'>
            <img
              src={Machine}
              alt='Machine'
              className='max-w-full h-auto shadow-lg rounded-lg mb-4'
            />
          </div>
          <div>
            <p className='text-justify max-w-3xl'>
              Gambar tersebut menampilkan sebuah mesin canggih yang diambil dari
              koleksi aset perusahaan Carlos Tech. Mesin ini merupakan
              representasi dari inovasi teknologi terbaru yang diimplementasikan
              dalam berbagai industri untuk meningkatkan efisiensi dan
              produktivitas. Dengan desain yang modern dan fungsionalitas yang
              tinggi, mesin ini menjadi simbol kemajuan teknis dan dedikasi
              perusahaan dalam menyediakan solusi industri yang unggul. Gambar
              ini diambil dengan resolusi tinggi, menyoroti detail presisi dan
              kualitas manufaktur dari mesin tersebut, menunjukkan komitmen
              Carlos Tech terhadap standar kualitas tertinggi dalam setiap
              produk yang mereka hasilkan.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
