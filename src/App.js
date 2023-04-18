import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Home from "./component/home";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </BrowserRouter> */}
      <Home />
    </>
  );
}

export default App;
