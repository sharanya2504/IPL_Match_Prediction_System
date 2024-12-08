import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import "./Login.css";

export const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogout = () => {
    axios
      .post("http://localhost:3002/logout", {}, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          setIsLoggedIn(false);
          navigate("../");
        }
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  const buttonStyles = {
    marginRight: "20px",
    fontSize: "1.2rem",
    fontWeight: "700",
    padding: "0.3rem 1.4rem",
    background: "transparent", // Fully transparent background
    backdropFilter: "blur(0px)", // No blur effect
    border: "1px solid rgba(255, 255, 255, 0.5)", // Subtle border
    color: "white", // Text color
    transition: "all 0.3s ease", // Smooth transition for hover effects
    cursor: "pointer",
  };

  const hoverStyles = {
    background: "rgba(255, 255, 255, 0.2)", // Slight background tint on hover
    color: "#ff0000", // Change text color on hover
    border: "1px solid rgba(255, 255, 255, 0.8)", // Enhance border on hover
  };

  return (
    <Button
      variant="contained"
      color="error"
      style={buttonStyles}
      onMouseEnter={(e) => {
        Object.assign(e.target.style, hoverStyles);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.target.style, buttonStyles);
      }}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};
