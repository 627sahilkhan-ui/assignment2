import React,{useEffect,useState} from "react";
import {Navigate} from "react-router-dom";
import {supabase} from "../supabase";


const ProtectedRoute = ({children})=>{


const [user,setUser]=useState(null);

const [loading,setLoading]=useState(true);



useEffect(()=>{


const checkUser=async()=>{


const {data}=await supabase.auth.getUser();


setUser(data.user);

setLoading(false);


};


checkUser();



},[]);



if(loading){

return <h2>Loading...</h2>;

}



return user ? children : <Navigate to="/login"/>;


};



export default ProtectedRoute;