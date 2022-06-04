import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Peages/Home";
import About from "./components/Peages/About";
import Project from "./components/Peages/Project";
import Contact from "./components/Peages/Contact";
import Login from "./components/Layout/Login";
import Signup from "./components/Layout/Singup";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
