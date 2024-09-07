import React from "react";
import Login from "./components/Login";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route to="/" element={<Login />} />
          <Route to="/home" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
