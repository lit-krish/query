import logo from './logo.svg';
import './App.css';
import Loginform from './loginform.js';
import Demo from './Demo.js';
import Reach from './Reach.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home.js';
import Try from './Try.js';
import Query from './Query.js';
import Profile from './Profile.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as api from "./API/index.js"
import Room from "./videocall_room.jsx"
import { SocketProvider } from './SocketProvider.js';

function App() {
  
  const dispatch=useDispatch()
  useEffect(()=>{
    api.getallteachers().
    then(data=>
     dispatch({type:"GET_TEACHERS",data:data.data})
    )
    .catch(error=>
      console.log(error.message)
    )
  },[]
  )

  return (
    <Router>
     <SocketProvider>
      <Routes>
        <Route path="/Query" element={<Query/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Loginform/>}/>
       <Route path="/Demo" element={<Demo/>}/>
       <Route path="/Reach" element={<Reach/>}/>
       <Route path="/Profile" element={<Profile/>}></Route>
       <Route path="/Try" element={<Try/>}/>
       <Route path="/room/:id" element={<Room/>}></Route>
      </Routes>
    </SocketProvider>
      </Router>
    
         );
}

export default App;
