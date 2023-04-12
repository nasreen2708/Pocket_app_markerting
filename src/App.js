import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Blog from "./pages/Blog";
import Blogdetails from "./pages/Blogdetails";
import Aboutus from "./pages/Aboutus";
import Newsarticle from "./pages/Newsarticle";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

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
          <Route path="/footer" element={<Footer />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
