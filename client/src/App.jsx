import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { ForgotPassword } from "./Components/ForgotPassword";
import { Navbar } from "./Components/Navbar";
import { LandingPage } from "./Components/LandingPage";
import axios from "axios";

function AppContent({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const isAuthPage = [].includes(location.pathname);

  return (
    <div className="main-content">
      {!isAuthPage && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Home Page */}
        <Route
          path="/home"
          element={
            isLoggedIn ? <Home /> : <Navigate to="/login" replace />
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/home" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={
            isLoggedIn ? <Navigate to="/home" replace /> : <Signup setIsLoggedIn={setIsLoggedIn} />
          }
        />

        {/* Forgot Password */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/user", { withCredentials: true })
      .then((response) => {
        if (response.data.user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => setIsLoggedIn(false));
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        {/* <footer className="footer">
          <p>
            <strong>Disclaimer:</strong> PrediX can make mistakes. Please use predictions for informational purposes only.
          </p>
        </footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;