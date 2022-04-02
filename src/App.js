import React from "react";
import OutNavbar from "./components/NavBar/OutNav";
import Home from "./components/BeforeLoginPages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Solutions from "./components/BeforeLoginPages/Solutions";
import Pricing from "./components/BeforeLoginPages/Pricing";
import ContactUs from "./components/BeforeLoginPages/ContactUs";
import Login from "./components/BeforeLoginPages/Login";

function App() {
  return (
    <Router>
      <OutNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
