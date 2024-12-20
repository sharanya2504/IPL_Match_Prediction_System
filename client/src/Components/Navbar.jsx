// import React from 'react'
// import {Link} from 'react-router-dom'
// import {Logout} from './Logout';
// import {AppBar, Typography, Toolbar, Button} from "@mui/material";

// export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
//     const button={marginRight:'20px', fontSize:'1.2rem', fontWeight:'700', padding:'0.3rem 1.4rem'}
//     return (
//             <AppBar sx={{ bgcolor: '#333' }}>
//                 <Toolbar>
//                     <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
//                         PrediX
//                     </Typography>
//                     {!isLoggedIn ? (
//                         <>
// <Button 
//     variant="contained" 
//     style={{
//         ...button, 
//         background: "rgba(255, 255, 255, 0.2)", // Transparent background
//         backdropFilter: "blur(5px)", // Blur effect on the background
//         border: "1px solid rgba(255, 255, 255, 0.3)", // Optional border for emphasis
//         color: "white", // Text color
//     }} 
//     color="error" 
//     component={Link} 
//     to="/login"
// >
//     Login
// </Button>




// <Button 
//     variant="contained" 
//     style={{
//         ...button, 
//         background: "rgba(255, 255, 255, 0.2)", // Transparent background
//         backdropFilter: "blur(0px)", // Blur effect on the background
//         border: "1px solid rgba(255, 255, 255, 0.3)", // Optional border for emphasis
//         color: "white", // Text color
//     }} 
//     color="success" 
//     component={Link} 
//     to="/signup"
// >
//     Signup
// </Button>

//                         </>
//                     ) : (
//                         <Logout setIsLoggedIn={setIsLoggedIn} />
//                     )}
//                 </Toolbar>
//             </AppBar>
//     );
// };



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logout } from './Logout';
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import './navbar.css';
import axios from 'axios';
import logo from '../assets/predixlogo.png';

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [userName, setUserName] = useState('');

  const buttonStyles = {
    marginRight: '20px',
    fontSize: '1.2rem',
    fontWeight: '700',
    padding: '0.3rem 1.4rem',
  };

  useEffect(() => {
    if (isLoggedIn) {
      axios.get('http://localhost:3002/user', { withCredentials: true })
        .then(response => {
          setUserName(response.data.user.name);
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [isLoggedIn]);

  return (
    <AppBar
      sx={{ bgcolor: 'rgba(51, 51, 51, 0.5)' }}
      className="navbar navbar-expand-lg navbar-dark fixed-top"
    >
      <Toolbar className="container-fluid">
        {/* Navbar Brand */}
        <Typography 
          variant="h4" 
          component="div" 
          sx={{ flexGrow: 1 }} 
          className="navbar-brand"
        >
          <img 
            src={logo}
            alt="Logo"
            style={{ height: '50px', marginRight: '10px' }}
          />
        </Typography>

        {/* Navbar Toggler for Responsive Behavior */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent" 
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div 
          className="collapse navbar-collapse justify-content-end" 
          id="navbarContent"
        >
          {!isLoggedIn ? (
            <div className="d-flex">
              <Button
                variant="contained"
                className="btn btn-outline-light button-hover me-3"
                style={{
                  ...buttonStyles,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  color: "white",
                }}
                color="error"
                component={Link}
                to="/login"
              >
                Login
              </Button>

              <Button
                variant="contained"
                className="btn btn-outline-light button-hover"
                style={{
                  ...buttonStyles,
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  color: "white",
                }}
                color="success"
                component={Link}
                to="/signup"
              >
                Signup
              </Button>
            </div>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ marginRight: '20px' }}>
                 {userName}
              </Typography>
              <Logout setIsLoggedIn={setIsLoggedIn} />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};