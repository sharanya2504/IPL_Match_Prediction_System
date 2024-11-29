import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="title">Welcome to PrediX!</h1>
        <p className="subtitle">
          Your ultimate platform for predicting IPL match outcomes and scores.
        </p>
        <h2 className="features-heading">Features</h2>
        <ul className="features-list">
          <li>
            <strong>Predict Match Winners:</strong> Insights based on past data, venue, and team
            performance.
          </li>
          <li>
            <strong>Score Prediction:</strong> Estimate first and second innings scores with advanced
            ML models.
          </li>
        </ul>
        <h2 className="how-it-works-heading">How It Works</h2>
        <p>
          We use cutting-edge <strong>Machine Learning</strong> and <strong>Deep Learning</strong>{" "}
          techniques combined with historical IPL data to deliver highly accurate predictions.
        </p>
        <h2 className="why-choose-us-heading">Why Choose Us?</h2>
        <ul className="why-choose-us-list">
          <li>
            <strong>Data-Driven Insights:</strong> Analyze team performance and match conditions.
          </li>
          <li>
            <strong>Real-Time Predictions:</strong> Adjust predictions as the match progresses.
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
    </div>
  );
};