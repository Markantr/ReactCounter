import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Feature from "./pages/features";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/features" element={<Feature />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
