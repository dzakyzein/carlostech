import Navbar from '../../Components/Navbar';
import Header from '../../Components/Header';
import Intro from './Intro';
import Product from './Product';
import Footer from '../../Components/Footer';
import Map from './Map';
import LandingLayout from './Layout/LandingLayout';
import ProductList from './ProductList';

const Home = () => {
  return (
    <LandingLayout>
      <Navbar />
      <Header />
      <Intro />
      <ProductList />
      <Product />
      <Map />
      <Footer />
    </LandingLayout>
  );
};

export default Home;
