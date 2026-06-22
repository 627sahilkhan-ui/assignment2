import Header from "../components/header";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import MainContent from "../components/maincontent";
import Footer from "../components/footer";


const Home = ({ addToCart, cartCount }) => {

  return (
    <>
      <Header />

      <Navbar cartCount={cartCount} />

      <Hero />

      <MainContent addToCart={addToCart} />

      <Footer />
    </>
  );
};


export default Home;