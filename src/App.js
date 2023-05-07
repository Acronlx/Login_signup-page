
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import React, { useEffect, useState } from 'react';
import {auth} from "./firebase";

function App() {

  const [userName,setUserName] = useState("");

  useEffect(()=> {
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);
      }else setUserName("");
    })
  },[]);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName}/>} />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
