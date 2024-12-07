import React, { useState } from "react";
import axios from "axios";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/check-email", { email })
      .then(response => {
        if (response.data.exists) {
          setStep(2);
        } else {
          setMessage("Email not found.");
        }
      })
      .catch(err => setMessage("Something went wrong!"));
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    axios.post("http://localhost:3002/reset-password", { email, password })
      .then(response => setMessage("Password reset successfully."))
      .catch(err => setMessage("Something went wrong!"));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}>
        <h3 className="text-center mb-3 text-primary">Forgot Password</h3>

        {/* Step 1: Enter Email */}
        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3">Next</button>
          </form>
        )}

        {/* Step 2: Reset Password */}
        {step === 2 && (
          <form onSubmit={handlePasswordReset}>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100 mt-3">Reset Password</button>
          </form>
        )}

        {message && (
          <div className="mt-3 text-center text-danger">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};
