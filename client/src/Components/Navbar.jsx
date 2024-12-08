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



import React from 'react';
import { Link } from 'react-router-dom';
import { Logout } from './Logout';
import { AppBar, Typography, Toolbar, Button } from "@mui/material";

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const buttonStyles = {
    marginRight: '20px',
    fontSize: '1.2rem',
    fontWeight: '700',
    padding: '0.3rem 1.4rem',
  };

  return (
    <AppBar 
      sx={{ bgcolor: '#333' }} 
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
          PrediX
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
                style={{
                  ...buttonStyles,
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                }}
                color="error"
                component={Link}
                to="/login"
                className="btn btn-outline-light me-3"
              >
                Login
              </Button>

              <Button
                variant="contained"
                style={{
                  ...buttonStyles,
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(0px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                }}
                color="success"
                component={Link}
                to="/signup"
                className="btn btn-outline-light"
              >
                Signup
              </Button>
            </div>
          ) : (
            <Logout setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
