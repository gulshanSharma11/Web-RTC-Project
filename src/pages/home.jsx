import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Home=()=>{
 const [roomCode, setroomCode] = useState("");
const navigate=useNavigate();

 const formHandler =(e)=>{
    e.preventDefault();
    navigate(`/room/${roomCode}`);
 }


    return (
    <>
<h1>Home Route</h1>
<form onSubmit={formHandler}>
    <label for="roomid">Enter Your Room ID</label>
    <input  type="text" value={roomCode} onChange={(e)=>setroomCode(e.target.value)} />
 <button>Submit</button>
</form>
    </>
    )
}
export default Home;