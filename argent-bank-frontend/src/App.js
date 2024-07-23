import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import SignIn from "./pages/Login/Login";
import User from "./pages/User/UserPage";
import Transactions from "./pages/Transactions/Transactions";
import NotFound from "./pages/NotFound/NotFound";

import "./App.css";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={isAuthenticated ? <NotFound /> : <SignIn />} />
          <Route path="/user" element={isAuthenticated ? <User /> : <NotFound />} />
          <Route path="/transactions" element={isAuthenticated ? <Transactions /> : <NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
