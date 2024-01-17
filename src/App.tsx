import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.sass";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import Work from "./Components/Work";
import About from "./Components/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
// import FooterHome from "./Components/FooterHome";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {


  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <AnimatePresence>
          <Routes >
            <Route index path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
