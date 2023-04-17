import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from './pages/Home'

import Contactus from "./pages/Contactus";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Contactus" element={<Contactus/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
