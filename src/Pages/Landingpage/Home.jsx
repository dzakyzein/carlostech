/* eslint-disable no-unused-vars */
import React from 'react';
import { AnimatedBackground } from 'animated-backgrounds';
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
      {/* Animasi latar belakang untuk seluruh halaman */}
      <AnimatedBackground animationName='cosmicDust' blendMode='normal' />

      {/* Konten halaman */}
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
