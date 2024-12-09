import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_#])[A-Za-z\d@$!%*?&_#]{8,}$/;

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (passwordError) {
      alert("Password is invalid.");
      return;
    }
    axios.post("http://localhost:3002/signup", { name, email, password })
      .then(result => {
        if (result.status === 201) {
          console.log("User created Successfully");
          navigate("/login");
        }
      })
      .catch(err => {
        if (err.response && err.response.status === 400) {
          alert("Email already exists. Please use a different email.");
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "500px", borderRadius: "8px" }}>
        <h1 className="text-center mb-4 text-primary">Signup</h1>
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label fw-bold">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <div className="text-danger mt-1">{passwordError}</div>}
          </div>
          <button type="submit" className="btn btn-primary btn-primary w-100 mt-3">Sign Up</button>
        </form>
        <div className="mt-3 text-center">
          <p>
            Already have an account? <Link to="/login" className="text-decoration-none text-primary">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
