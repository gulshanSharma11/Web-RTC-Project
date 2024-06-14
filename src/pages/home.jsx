import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import avatar from "../assets/3551739.jpg"




const Home=()=>{
 const [roomCode, setroomCode] = useState("");
 const [isHovered , setIsHovered]= useState(false)
const navigate=useNavigate();

 const formHandler =(e)=>{
    e.preventDefault();
    navigate(`/room/${roomCode}`);
 }


 const imgStyle = {
    borderRadius: '40px', // CamelCase property name
    backgroundColor: 'lightblue', // CamelCase property name
    padding: '20px', // CamelCase property name
    marginTop:"30px"
    
    
  };

  const  heading={
    
    color: '#3383FF',
 
    //margin:" 20px 50px 5px 100px",
  }

  const home={
    //marginLeft: "auto",
    display: 'grid',
    placeItems: 'center',
    
  }

  const button ={
    backgroundColor: isHovered ? 'lightcoral' : 'lightblue',
    width:"308px", height:"40px" , marginTop:"20px" , fontSize:"20px"
  }


    return (
    <>
    <div style={home}>
    <div style={heading}>
<h1>Connect with your loved ones anytime, anywhere on Connect, the free and secure <br></br> <span style={{marginLeft:"20%"}}>end-to-end encrypted video calling and meeting app</span></h1>
</div>
<div>
<img src={avatar} alt="" height={300} width={300}  style={imgStyle} />
</div>
<div>
<form onSubmit={formHandler}>
    <h2 style={{marginLeft:"50px"}}>Enter Your Room ID</h2>
    <input  type="text" value={roomCode} onChange={(e)=>setroomCode(e.target.value)} style={{width:"300px", height:"40px", fontSize:"20px"}} /> <br />
 <button style={button} onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
 >Submit</button>
</form>
</div>
</div>
    </>
    )
}
export default Home;
