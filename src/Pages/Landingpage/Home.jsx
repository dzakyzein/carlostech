import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import Intro from './Intro';
import CardProduct from './CardProduct';
import Product from './Product';
import Footer from '../../Components/Footer';
import Map from './Map';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Intro />
      <CardProduct />
      <Product />
      <Map />
      <Footer />
    </>
  );
};

export default Home;
