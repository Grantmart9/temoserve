"use client";
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Button from "@mui/material/Button";
import { TextField, InputAdornment, Box } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useRouter } from 'next/navigation'; // Change this to `next/navigation` for client-side navigation
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/Visibilityoff';
import { SUPABASE_URL, API_KEY } from "../supabase";
import * as motion from "motion/react-client"

const supabase = createClient(SUPABASE_URL, API_KEY);

const LoginDialog = ({
    handleUsername,
    handlePassword,
    showPassword,
    handleSignIn,
    open,
    handleSignUp
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 40 }}
            transition={{
                type: "spring",
                bounce: 0.02,
                stiffness: 300,
                damping: 100,
                mass: 10,
                duration: 2,
            }}
            className="flex align-center justify-center" style={{ marginTop: "25vh" }}>
            <Box sx={{ maxWidth: 400 }}>
                <div className="grid grid-flow-row gap-2 bg-gradient-to-r from-white to-white via-cyan-50 rounded-lg shadow-md shadow-cyan-950 p-4">
                    <TextField
                        id="input-with-icon-textfield"
                        label="email"
                        size="small"
                        onChange={handleUsername}
                        sx={{ borderColor: "116d80" }}
                        variant="standard"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle sx={{ color: "#116d80" }} />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                    <TextField
                        id="input-with-icon-textfield"
                        label="password"
                        size="small"
                        onChange={handlePassword}
                        type={open ? "password" : "text"}
                        sx={{ borderColor: "116d80" }}
                        variant="standard"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <KeyIcon sx={{ color: "#116d80" }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <div>
                                        {open ? (
                                            <InputAdornment position="end">
                                                <Button onClick={showPassword}><VisibilityIcon sx={{ color: "#116d80" }} /></Button>
                                            </InputAdornment>
                                        ) : (
                                            <InputAdornment position="end">
                                                <Button onClick={showPassword}><VisibilityOffIcon sx={{ color: "#116d80" }} /></Button>
                                            </InputAdornment>
                                        )}
                                    </div>
                                ),
                            },
                        }}
                    />
                    <div className="grid grid-flow-col gap-1 mt-2">
                        <Button
                            size="small"
                            onClick={handleSignIn}
                            fullWidth={false}
                            sx={{ textTransform: "none", bgcolor: "#116d80", color: "whitesmoke" }}
                        >
                            Login
                        </Button>
                        <Button
                            size="small"
                            fullWidth={false}
                            onClick={handleSignUp}
                            sx={{ textTransform: "none", bgcolor: "#116d80", color: "whitesmoke" }}
                        >
                            Sign Up
                        </Button>

                    </div>
                </div>
            </Box>
        </motion.div>)
}


const SignUpDialog = ({
    handleUsername,
    handlePassword,
    showPassword,
    handleSignIn,
    open,
    handleSignUpBack }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 40 }}
            transition={{
                type: "spring",
                bounce: 0.02,
                stiffness: 300,
                damping: 100,
                mass: 10,
                duration: 2,
            }}
            className="flex align-center justify-center" style={{ marginTop: "25vh" }}>
            <Box sx={{ minWidth: 400 }}>
                <div className="grid grid-flow-row gap-2 bg-gradient-to-r from-white to-white via-cyan-50 rounded-lg shadow-md shadow-cyan-950 p-4">
                    <TextField
                        id="input-with-icon-textfield"
                        label="First Name"
                        size="small"
                        sx={{ borderColor: "116d80" }}
                        variant="standard"
                    />
                    <TextField
                        id="input-with-icon-textfield"
                        label="Last Name"
                        size="small"
                        sx={{ borderColor: "116d80" }}
                        variant="standard"
                    />
                    <TextField
                        id="input-with-icon-textfield"
                        label="email"
                        size="small"
                        sx={{ borderColor: "116d80" }}
                        variant="standard"
                    />
                    <TextField
                        id="input-with-icon-textfield"
                        label="Address"
                        size="small"
                        sx={{ borderColor: "116d80" }}
                        variant="standard"
                    />
                    <TextField
                        id="input-with-icon-textfield"
                        label="Password"
                        size="small"
                        sx={{ borderColor: "116d80" }}
                        variant="standard"
                    />

                    <TextField
                        id="input-with-icon-textfield"
                        label="Confirm Password"
                        size="small"
                        sx={{ borderColor: "116d80" }}
                        variant="standard"
                    />
                    <TextField
                        id="input-with-icon-textfield"
                        label="Date of birth"
                        size="small"
                        type="date"
                        sx={{ borderColor: "116d80" }}
                        variant="standard"
                    />
                    <div className="grid grid-cols-2 gap-1 mt-2">
                        <Button
                            size="small"
                            fullWidth={false}
                            onClick={handleSignUpBack}
                            sx={{ textTransform: "none", bgcolor: "#116d80", color: "whitesmoke" }}
                        >
                            Back
                        </Button>
                        <Button
                            size="small"
                            fullWidth={false}
                            onClick={handleSignUpBack}
                            sx={{ textTransform: "none", bgcolor: "#116d80", color: "whitesmoke" }}
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </Box>
        </motion.div>
    )
}

const Login = () => {
    const [open, setOpen] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState(true);

    const router = useRouter(); // Use useRouter from next/navigation for client-side routing

    async function handleSignIn() {

        try {
            // Perform sign-in
            const { user, session, error } = await supabase.auth.signInWithPassword({
                email: username,
                password: password,
            });

            // Check for errors during sign-in
            if (error) {
                console.error("Error during sign-in:", error.message);
                return; // Stop execution if there is an error
            }

            // If session is present, set the session
            if (session) {
                supabase.auth.setAuth(session.access_token);
            }

            // If user object is present, store user ID and log it
            if (user) {
                // Ensure we're in the client-side context
                if (typeof window !== 'undefined') {
                    //Store the user_id in localStorage (only in browser)
                    localStorage.setItem("user_id", JSON.stringify(user));
                }
            } else {
                console.error("No user object found");
            }

            // Redirect to homepage after successful login
            router.push("/rent-a-service");

        } catch (err) {
            console.error("Error during sign-in:", err);
        }
    }

    const showPassword = () => { setOpen(!open); };
    const handleUsername = (e) => { setUsername(e.target.value); };
    const handlePassword = (e) => { setPassword(e.target.value); };
    const handleSignUp = () => { setAuth(false) }
    const handleSignUpBack = () => { setAuth(true) }

    return (
        <React.Fragment>
            {auth ?
                <LoginDialog
                    handleUsername={handleUsername}
                    handlePassword={handlePassword}
                    showPassword={showPassword}
                    handleSignIn={handleSignIn}
                    handleSignUp={handleSignUp}
                    open={open} />
                :
                <SignUpDialog
                    handleUsername={handleUsername}
                    handlePassword={handlePassword}
                    showPassword={showPassword}
                    handleSignIn={handleSignIn}
                    handleSignUpBack={handleSignUpBack}
                    open={open} />
            }
        </React.Fragment>
    );
};

export default Login;
