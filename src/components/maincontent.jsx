import React from "react";

const products = [
  {
    id: 1,
    title: "Nike Shoes",
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 2,
    title: "Smart Watch",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    id: 3,
    title: "Headphones",
    price: "₹1,999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 4,
    title: "Gaming Mouse",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
  },
  {
    id: 5,
    title: "Laptop",
    price: "₹59,999",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },
  {
    id: 6,
    title: "Camera",
    price: "₹29,999",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
  }
];

const MainContent = () => {
  return (
    <section className="products">
      <h2>Trending Products</h2>

      <div className="product-grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainContent;