import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Orders from "./pages/order";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {

  const [cartItems, setCartItems] = useState([]);

  // Add product to cart (safe state update)
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* 🚨 FORCE FIRST PAGE = LOGIN */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* 🔓 PUBLIC AUTH ROUTES */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* 🔐 PROTECTED DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* 🔐 PROTECTED APP ROUTES */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home
                addToCart={addToCart}
                cartCount={cartItems.length}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart cartItems={cartItems} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;