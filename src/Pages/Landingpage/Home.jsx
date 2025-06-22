/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import Intro from "./Intro";
import Product from "./Product";
import Footer from "../../Components/Footer";
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
