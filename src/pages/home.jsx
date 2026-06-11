import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <MainContent />
      <Footer />
    </>
  );
};

export default Home;