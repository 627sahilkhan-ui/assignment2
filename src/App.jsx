import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Orders from "./pages/order";

import "./App.css";


function App() {

  const [cartItems, setCartItems] = useState([]);


  // Add product to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };


  return (

    <BrowserRouter>

      <Routes>


        <Route 
          path="/" 
          element={
            <Home 
              addToCart={addToCart}
              cartCount={cartItems.length}
            />
          } 
        />


        <Route 
          path="/about" 
          element={<About />} 
        />


        <Route 
          path="/contact" 
          element={<Contact />} 
        />


        <Route 
          path="/cart" 
          element={
            <Cart 
              cartItems={cartItems}
            />
          } 
        />


        <Route 
          path="/orders" 
          element={<Orders />} 
        />


      </Routes>

    </BrowserRouter>

  );
}


export default App;