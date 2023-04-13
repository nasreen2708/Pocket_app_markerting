import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Forgot from './pages/Forgot'
import Newpassword from './pages/Newpassword'
import Otp from './pages/Otp'
import Contactus from './pages/Contactus'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login  />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Newpassword" element={<Newpassword />} />
           <Route path="/Otp" element={<Otp/>} />
           <Route path="/Contactus" element={<Contactus/>} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
