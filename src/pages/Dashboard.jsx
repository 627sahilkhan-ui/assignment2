import React,{useEffect,useState} from "react";
import {supabase} from "../supabase";
import {useNavigate} from "react-router-dom";


const Dashboard =()=>{


const navigate = useNavigate();

const [user,setUser]=useState(null);



useEffect(()=>{


const getUser=async()=>{


const {data}=await supabase.auth.getUser();


setUser(data.user);


};


getUser();


},[]);




const logout=async()=>{


await supabase.auth.signOut();


navigate("/login");


};




return(

<div className="page">


<h1>
Dashboard 🏠
</h1>


{

user ?

<>

<h2>
Welcome {user.email}
</h2>


<button 
className="order-btn"
onClick={logout}
>

Logout

</button>

</>

:

<h2>
Loading...
</h2>

}



</div>

);


};


export default Dashboard;