import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { ForgotPassword } from "./Components/ForgotPassword";
import { Navbar } from "./Components/Navbar";
import { LandingPage } from "./Components/LandingPage";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// AppContent renders the main routes and conditionally shows the Navbar
function AppContent({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();

  // Auth pages where navbar shouldn't be shown
  const authPages = ["/login", "/signup", "/forgot-password"];
  const isAuthPage = authPages.includes(location.pathname);

  return (
    <div className="main-content">
      {/* Only render navbar if not on auth-related pages */}
      {!isAuthPage && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      
      {/* Add margin to the content to avoid being hidden under the navbar */}
      <div style={{ marginTop: isAuthPage ? "0" : "64px" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/home" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/signup"
            element={isLoggedIn ? <Navigate to="/home" replace /> : <Signup setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/user", { withCredentials: true })
      .then((response) => {
        if (response?.data?.user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching user authentication status", error);
        setIsLoggedIn(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
    </BrowserRouter>
  );
}

export default App;
