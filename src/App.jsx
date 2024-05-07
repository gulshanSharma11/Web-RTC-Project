import { useState } from 'react'

import Home from "./pages/home"
import { Routes,Route } from 'react-router-dom'
import RoomPage from "./pages/RoomPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/room/:roomID"   element={<RoomPage />} />
    </Routes>
      
    </>
  )
}

export default App
