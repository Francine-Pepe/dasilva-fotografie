import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.sass";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import Work from "./Components/Work";
import About from "./Components/About";
import Contact from "./Components/Contact";
import DarkLightMode from "./Components/DarkLightMode";
import NavbarVertical from "./Components/Navbar/NavbarVertical";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <DarkLightMode />
        {/* <Home /> */}
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
