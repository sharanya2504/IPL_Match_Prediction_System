import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import './Login.css';

export const Login = ({ setIsLoggedIn, isLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/login", { email, password }, { withCredentials: true })
      .then((result) => {
        if (result.status === 200 && result.data === "Success") {
          axios
            .get("http://localhost:3002/user", { withCredentials: true })
            .then((response) => {
              if (response.status === 200 && response.data.user) {
                setIsLoggedIn(true);
                navigate("/home", { state: { user: response.data.user } });
              } else {
                console.error("Failed to fetch user data.");
                alert("Something went wrong while fetching user data.");
              }
            })
            .catch((err) => {
              console.error("Error while fetching user data:", err);
              alert("Something went wrong.");
            });
        } else {
          console.log("Login failed:", result.data);
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert("An error occurred while logging in.");
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="row w-100">
        {/* Centering the form with a responsive column */}
        <div className="col-11 col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card shadow p-4">
            <h1 className="text-center mb-4 text-primary">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-group mb-4">
                <label htmlFor="email" className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password" className="form-label fw-bold">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-danger w-100">Login</button>
            </form>
            <div className="mt-3 text-center">
              <Link to="/forgot-password" className="text-decoration-none text-primary">Forgot Password?</Link>
            </div>
            <div className="mt-3 text-center">
              <p>
                Don't have an account? <Link to="/signup" className="text-primary text-decoration-none">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
