import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { Navbar } from "./Components/Navbar";
import axios from "axios";

// Wrapper component to use `useLocation` properly
function AppContent({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation(); // Get the current route
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="app">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/home" replace />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isLoggedIn ? (
              <Navigate to="/home" replace />
            ) : (
              <Signup setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
      </Routes>

      {/* Conditionally render the home text */}
      {!isLoggedIn && !isAuthPage && (
        <div className="home-text">
          <h1 className="title">Welcome to IPL Match Predictor!</h1>
          <p className="subtitle">
            Your ultimate platform for predicting IPL match outcomes, scores.
          </p>
          <h2 className="features-heading">Features:</h2>
          <ul className="features-list">
            <li>
              <strong>Predict Match Winners:</strong> Get insights on who might win based on past data,
              venue, and team performance.
            </li>
            <li>
              <strong>Score Prediction:</strong> Estimate first and second innings scores with advanced
              machine learning models.
            </li>
            <li>
              <strong>Dynamic Analysis:</strong> Explore predictions based on current match scenarios
              like overs, wickets, and run rates.
            </li>
          </ul>
          <h2 className="how-it-works-heading">How It Works:</h2>
          <p>
            We use cutting-edge <strong>Machine Learning</strong> and <strong>Deep Learning</strong>{" "}
            techniques combined with historical IPL data to deliver highly accurate predictions.
          </p>
          <h2 className="why-choose-us-heading">Why Choose Us?</h2>
          <ul className="why-choose-us-list">
            <li>
              <strong>Data-Driven Insights:</strong> We analyze player performance, team statistics, and
              match conditions.
            </li>
            <li>
              <strong>Real-Time Predictions:</strong> Adjust your predictions as the match progresses.
            </li>
            <li>
              <strong>Easy-to-Use Interface:</strong> Navigate through predictions with a user-friendly
              design.
            </li>
          </ul>
          <h2 className="start-exploring-heading">Start Exploring Now!</h2>
          <p>
            Stay ahead in the game with reliable predictions. Whether you're a fan, analyst, or
            enthusiast, our platform is designed for you.
          </p>
        </div>
      )}
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
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </BrowserRouter>
  );
}

export default App;
