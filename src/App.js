import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Blog from "./pages/Blog";
import Blogdetails from "./pages/Blogdetails";
import Aboutus from "./pages/Aboutus";
import Newsarticle from "./pages/Newsarticle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetails" element={<Blogdetails />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/newsarticle" element={<Newsarticle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
