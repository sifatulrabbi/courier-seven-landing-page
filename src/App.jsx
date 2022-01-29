import React from "react";
import "./styles/main.scss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
