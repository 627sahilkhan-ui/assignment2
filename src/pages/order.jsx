import { useState } from "react";
import { supabase } from "../supabase";


const Orders = () => {

  const [order, setOrder] = useState({
    full_name: "",
    address: "",
    payment_method: ""
  });


  const handleChange = (e) => {

    setOrder({
      ...order,
      [e.target.name]: e.target.value
    });

  };


  const placeOrder = async (e) => {

    e.preventDefault();


    const { error } = await supabase
      .from("orders")
      .insert([
        {
          full_name: order.full_name,
          address: order.address,
          payment_method: order.payment_method
        }
      ]);


    if(error){

      alert("Order Failed ❌");
      console.log(error);

    }

    else{

      alert("Order Placed Successfully 🎉");

      setOrder({
        full_name:"",
        address:"",
        payment_method:""
      });

    }

  };


  return (

    <div className="page">

      <h1>📦 Place Your Order</h1>


      <form 
        className="contact-form"
        onSubmit={placeOrder}
      >


        <input

          type="text"

          name="full_name"

          placeholder="Full Name"

          value={order.full_name}

          onChange={handleChange}

          required

        />


        <textarea

          name="address"

          placeholder="Delivery Address"

          value={order.address}

          onChange={handleChange}

          required

        />


        <select

          name="payment_method"

          value={order.payment_method}

          onChange={handleChange}

          required

        >

          <option value="">
            Select Payment Method
          </option>


          <option value="Cash On Delivery">
            Cash On Delivery
          </option>


          <option value="UPI">
            UPI
          </option>


          <option value="Credit Card">
            Credit Card
          </option>


        </select>


        <button type="submit">

          Confirm Order

        </button>


      </form>


    </div>

  );

};


export default Orders;