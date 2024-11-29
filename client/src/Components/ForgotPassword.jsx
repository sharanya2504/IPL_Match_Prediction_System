import React, { useState } from "react";
import axios from "axios";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";

export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [step, setStep] = useState(1); // Step 1: Enter email, Step 2: Reset password

    const paperStyle = { padding: "2rem", margin: "100px auto", borderRadius: "1rem", boxShadow: "10px 10px 10px" };
    const btnStyle = { marginTop: "2rem", fontSize: "1.2rem", fontWeight: "700", backgroundColor: "blue", borderRadius: "0.5rem" };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3002/check-email", { email })
            .then(response => {
                if (response.data.exists) {
                    setStep(2); // Proceed to reset password
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
        <Grid align="center">
            <Paper style={paperStyle} sx={{ width: { xs: '80vw', sm: '50vw', md: '40vw', lg: '30vw', xl: '20vw' }, height: 'auto' }}>
                <Typography component="h1" variant="h5" style={{ fontSize: "2.5rem", fontWeight: "600" }}>Forgot Password</Typography>

                {step === 1 && (
                    <form onSubmit={handleEmailSubmit}>
                        <TextField
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            fullWidth
                            label="Email"
                            variant="outlined"
                            type="email"
                            placeholder="Enter your email"
                            style={{ marginTop: "2rem" }}
                        />
                        <Button type="submit" style={btnStyle} variant="contained">Next</Button>
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handlePasswordReset}>
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            fullWidth
                            label="New Password"
                            variant="outlined"
                            type="password"
                            placeholder="Enter new password"
                            style={{ marginTop: "2rem" }}
                        />
                        <TextField
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            fullWidth
                            label="Confirm Password"
                            variant="outlined"
                            type="password"
                            placeholder="Confirm your password"
                            style={{ marginTop: "1rem" }}
                        />
                        <Button type="submit" style={btnStyle} variant="contained">Reset Password</Button>
                    </form>
                )}

                {message && <Typography style={{ marginTop: "1rem", color: "red" }}>{message}</Typography>}
            </Paper>
        </Grid>
    );
};