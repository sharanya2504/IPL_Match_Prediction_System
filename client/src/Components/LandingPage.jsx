// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./LandingPage.css";

// export const LandingPage = () => {
//   return (
//     <div className="d-flex flex-column vh-100">
//       <div className="d-flex align-items-center justify-content-center flex-grow-1">
//         <div className="scrollable-container text-center p-4 rounded">
//           <h1 className="title mb-3">Welcome to PrediX!</h1>
//           <p className="subtitle mb-4">
//             Your ultimate platform for predicting IPL match outcomes and scores.
//           </p>

//           <h2 className="features-heading mb-3">Features</h2>
//           <ul
//             className="features-list mb-4 text-left"
//             style={{ listStyleType: "none" }}
//           >
//             <li>
//               <strong>Predict Match Winners:</strong> Insights based on past
//               data, venue, and team performance.
//             </li>
//             <li>
//               <strong>Score Prediction:</strong> Estimate first and second
//               innings scores with advanced ML models.
//             </li>
//           </ul>

//           <h2 className="how-it-works-heading mb-3">How It Works</h2>
//           <p className="mb-4">
//             We use cutting-edge <strong>Machine Learning</strong> and{" "}
//             <strong>Deep Learning</strong> techniques combined with historical
//             IPL data to deliver highly accurate predictions.
//           </p>

//           <h2 className="why-choose-us-heading mb-3">Why Choose Us?</h2>
//           <ul
//             className="why-choose-us-list mb-4 text-left"
//             style={{ listStyleType: "none" }}
//           >
//             <li>
//               <strong>Data-Driven Insights:</strong> Analyze team performance
//               and match conditions.
//             </li>
//             <li>
//               <strong>Real-Time Predictions:</strong> Adjust predictions as the
//               match progresses.
//             </li>
//             <li>
//               <strong>Easy-to-Use Interface:</strong> Navigate through
//               predictions with a user-friendly design.
//             </li>
//           </ul>

//           <h2 className="start-exploring-heading mb-3">Start Exploring Now!</h2>
//           <p>
//             Stay ahead in the game with reliable predictions. Whether you're a
//             fan, analyst, or enthusiast, our platform is designed for you.
//           </p>
//         </div>
//       </div>
//       <footer className="footer bg-dark text-white text-center py-2">
//         <small>© 2024 PrediX. All rights reserved. </small>
//       </footer>
//     </div>
//   );
// };

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Main Content Section */}
      <div className="d-flex align-items-center justify-content-center flex-grow-1">
        <div className="scrollable-container text-center p-4 rounded mt-5 mb-3">
          {/* Welcome Section */}
          <h1 className="title mb-3">Welcome to PrediX!</h1>
          <p className="subtitle mb-4">
            Your ultimate platform for predicting IPL match outcomes and scores.
          </p>

          {/* Features Section */}
          <h2 className="features-heading mb-3">Features</h2>
          <div className="features-container mb-4">
            <div className="feature-card">
              <h3>Predict Match Winners</h3>
              <p>
                Insights based on past data, venue, and team performance.
              </p>
            </div>
            <div className="feature-card">
              <h3>Score Prediction</h3>
              <p>
                Estimate first and second innings scores with advanced DL models.
              </p>
            </div>
          </div>

          {/* How it works */}
          <h2 className="how-it-works-heading mb-3">How It Works</h2>
          <p className="mb-4">
            We use cutting-edge <strong>Machine Learning</strong> and{" "}
            <strong>Deep Learning</strong> techniques combined with historical
            IPL data to deliver highly accurate predictions.
          </p>

          {/* Why Choose Us */}
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

          {/* Call to Action */}
          <h2 className="start-exploring-heading mb-3">Start Exploring Now!</h2>
          <p>
            Stay ahead in the game with reliable predictions. Whether you're a
            fan, analyst, or enthusiast, our platform is designed for you.
          </p>
        </div>
      </div>

<div className="social-contact-section text-center py-4 bg-dark">
  <div className="contact-container d-flex flex-wrap align-items-center justify-content-center text-white">
    <p className="mb-0 me-2">Contact us via email at:</p>
    <a href="mailto:sharanyalakkamsetti@gmail.com" className="text-white me-4">
      sharanyalakkamsetti@gmail.com
    </a>
    <div className="social-icons d-flex align-items-center">
      <a
        href="https://www.instagram.com/sharanya_lakkamsetti"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link me-3"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link me-3"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  </div>
  <p className="text-white">
      Or call us at: <a href="tel:+918247027531">+91 8247027531</a>
    </p>
</div>


      {/* Footer Section */}
      <footer className="footer bg-dark text-white text-center py-2">
        <small>© 2024 PrediX. All rights reserved.</small>
      </footer>
    </div>
  );
};