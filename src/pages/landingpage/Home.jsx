/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Intro from "./Intro";
import Product from "./Product";
import Footer from "../../components/Footer";
import Map from "./Map";
import LandingLayout from "./layout/LandingLayout";
import StepProcess from "./StepProcess";
import WhyChooseUs from "./WhyChooseUs";
import CallToAction from "./CallToAction";
// import ProductList from './ProductList';

const Home = () => {
  return (
    <LandingLayout>
      <Navbar />
      <Header />
      <Intro />
      {/* <ProductList /> */}
      <Product />
      <StepProcess />
      <WhyChooseUs />
      <CallToAction />
      <Map />
      <Footer />
    </LandingLayout>
  );
};

export default Home;
