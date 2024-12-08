// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import './LandingPage.css';

// export const LandingPage = () => {
//   return (
//     <div className="d-flex align-items-center justify-content-center vh-100">
//       <div className="scrollable-container text-center p-4 rounded">
//         <h1 className="title mb-3">Welcome to PrediX!</h1>
//         <p className="subtitle mb-4">
//           Your ultimate platform for predicting IPL match outcomes and scores.
//         </p>
        
//         <h2 className="features-heading mb-3">Features</h2>
//         <ul className="features-list mb-4 text-left" style={{ listStyleType: "none" }}>
//           <li>
//             <strong>Predict Match Winners:</strong> Insights based on past data, venue, and team
//             performance.
//           </li>
//           <li>
//             <strong>Score Prediction:</strong> Estimate first and second innings scores with advanced
//             ML models.
//           </li>
//         </ul>
        
//         <h2 className="how-it-works-heading mb-3">How It Works</h2>
//         <p className="mb-4">
//           We use cutting-edge <strong>Machine Learning</strong> and <strong>Deep Learning</strong>{" "}
//           techniques combined with historical IPL data to deliver highly accurate predictions.
//         </p>
        
//         <h2 className="why-choose-us-heading mb-3">Why Choose Us?</h2>
//         <ul className="why-choose-us-list mb-4 text-left" style={{ listStyleType: "none" }}>
//           <li>
//             <strong>Data-Driven Insights:</strong> Analyze team performance and match conditions.
//           </li>
//           <li>
//             <strong>Real-Time Predictions:</strong> Adjust predictions as the match progresses.
//           </li>
//           <li>
//             <strong>Easy-to-Use Interface:</strong> Navigate through predictions with a user-friendly
//             design.
//           </li>
//         </ul>
        
//         <h2 className="start-exploring-heading mb-3">Start Exploring Now!</h2>
//         <p>
//           Stay ahead in the game with reliable predictions. Whether you're a fan, analyst, or
//           enthusiast, our platform is designed for you.
//         </p>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <div className="d-flex align-items-center justify-content-center flex-grow-1">
        <div className="scrollable-container text-center p-4 rounded">
          <h1 className="title mb-3">Welcome to PrediX!</h1>
          <p className="subtitle mb-4">
            Your ultimate platform for predicting IPL match outcomes and scores.
          </p>

          <h2 className="features-heading mb-3">Features</h2>
          <ul
            className="features-list mb-4 text-left"
            style={{ listStyleType: "none" }}
          >
            <li>
              <strong>Predict Match Winners:</strong> Insights based on past
              data, venue, and team performance.
            </li>
            <li>
              <strong>Score Prediction:</strong> Estimate first and second
              innings scores with advanced ML models.
            </li>
          </ul>

          <h2 className="how-it-works-heading mb-3">How It Works</h2>
          <p className="mb-4">
            We use cutting-edge <strong>Machine Learning</strong> and{" "}
            <strong>Deep Learning</strong> techniques combined with historical
            IPL data to deliver highly accurate predictions.
          </p>

          <h2 className="why-choose-us-heading mb-3">Why Choose Us?</h2>
          <ul
            className="why-choose-us-list mb-4 text-left"
            style={{ listStyleType: "none" }}
          >
            <li>
              <strong>Data-Driven Insights:</strong> Analyze team performance
              and match conditions.
            </li>
            <li>
              <strong>Real-Time Predictions:</strong> Adjust predictions as the
              match progresses.
            </li>
            <li>
              <strong>Easy-to-Use Interface:</strong> Navigate through
              predictions with a user-friendly design.
            </li>
          </ul>

          <h2 className="start-exploring-heading mb-3">Start Exploring Now!</h2>
          <p>
            Stay ahead in the game with reliable predictions. Whether you're a
            fan, analyst, or enthusiast, our platform is designed for you.
          </p>
        </div>
      </div>
      <footer className="footer bg-dark text-white text-center py-2">
        PrediX can make mistakes
      </footer>
    </div>
  );
};
