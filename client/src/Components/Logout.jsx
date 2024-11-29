import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Button} from "@mui/material";

export const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

    const handleLogout = () => {
        axios.post("http://localhost:3002/logout", {}, { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    setIsLoggedIn(false);
                    navigate("../");
                }
            })
            .catch(error => {
                console.error("Error logging out:", error);
            });
    };
    const button={marginRight:'20px', fontSize:'1.2rem', fontWeight:'700', padding:'0.3rem 1.4rem'}
    return (
<Button 
    variant="contained" 
    color="error" 
    style={{
        ...button, 
        background: "rgba(255, 255, 255, 0.2)", // Transparent background
        backdropFilter: "blur(5px)", // Blur effect on the background
        border: "1px solid rgba(255, 255, 255, 0.3)", // Optional border for emphasis
        color: "white", // Text color
    }} 
    onClick={handleLogout}
>
    Logout
</Button>

  )
}
