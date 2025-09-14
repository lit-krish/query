import { BrowserRouter, Routes, Route } from "react-router-dom";
import TutorDetails from "./pages/TutorDetails";
import Loginn from "./pages/Loginn";
import Home from "./pages/Home";
import Request from "./pages/Request";
import { SocketProvider, useSocket } from "./SocketProvider.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Room from "./pages/room"


const App = () => {
  const socket=useSocket()
  const user =useSelector(state => state.userreducer.data)
  
  return (
    <>
      <BrowserRouter>
        <SocketProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Loginn />} />
            <Route path="/details" element={<TutorDetails />} />
            <Route path="/request" element={<Request />} />
            <Route path="/room/:id" element={<Room />} />
          </Routes>
        </SocketProvider>
      </BrowserRouter>
    </>
  )
}
export default App;