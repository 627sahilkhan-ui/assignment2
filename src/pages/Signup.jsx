import React, { useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";


const Signup = () => {


  const navigate = useNavigate();


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");



  const handleSignup = async(e)=>{

    e.preventDefault();


    const {error} = await supabase.auth.signUp({

      email,
      password

    });



    if(error){

      alert(error.message);

    }

    else{

      alert("Signup Successful 🎉");
      navigate("/login");

    }

  };



  return (

    <div className="page">


      <h1>
        Create Account 🚀
      </h1>



      <form 
        className="contact-form"
        onSubmit={handleSignup}
      >


        <input

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          required

        />



        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          required

        />



        <button type="submit">

          Signup

        </button>



      </form>


    </div>

  );

};


export default Signup;