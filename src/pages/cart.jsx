import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems }) => {

  const navigate = useNavigate();


  return (
    <div className="page">

      <h1>🛒 Shopping Cart</h1>


      {
        cartItems.length === 0 ? (

          <h2>Your cart is empty</h2>

        ) : (

          <>

          <div className="product-grid">

            {
              cartItems.map((item,index)=>(

                <div className="card" key={index}>

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.price}
                  </p>

                </div>

              ))
            }

          </div>


          <button
            className="order-btn"
            onClick={() => navigate("/orders")}
          >
            Order Now
          </button>


          </>

        )
      }


    </div>
  );
};


export default Cart;