//import logo from './logo.svg';
//import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import Home from './Components/Home/Home';
import { auth } from './firebase';
function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
      console.log(user)
    });
  }, [])
  return (
    <div className="App">
      <Routes>

        <Route path="Login" element={<Login />}></Route>
        <Route path="Signup" element={<Signup />}></Route>
        <Route path="/" element={<Home name={userName} />}></Route>


      </Routes>
    </div>
  );
}

export default App;
