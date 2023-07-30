import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    };

    const resetState = () => {
        setIsSignup(!isSignup);
        setInputs({ name: "", email: "", password: "" });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    display="flex"
                    flexDirection="column"
                    maxWidth={400}
                    alignItems="center"
                    justifyContent="center"
                    margin="auto"
                    marginTop={5}
                    padding={3}
                    borderRadius={5}
                    boxShadow="5px 5px 10px #ccc"
                    sx={{
                        ':hover': {
                            boxShadow: '10px 10px 20px #ccc',
                        },
                    }}
                >
                    <Typography variant="h2" padding={3} textAlign="center">
                        {isSignup ? "signup" : "login"}
                    </Typography>
                    {isSignup && (
                        <TextField
                            margin="normal"
                            onChange={handleChange}
                            name="name"
                            value={inputs.name}
                            type="text"
                            variant="outlined"
                            placeholder="Name"
                        />
                    )}
                    <TextField
                        onChange={handleChange}
                        margin="normal"
                        type="email"
                        name="email"
                        value={inputs.email}
                        variant="outlined"
                        placeholder="Email"
                    />
                    <TextField
                        onChange={handleChange}
                        margin="normal"
                        type="password"
                        name="password"
                        value={inputs.password}
                        variant="outlined"
                        placeholder="Password"
                    />
                    <Button
                        type="submit"

                        sx={{ marginTop: 3, borderRadius: 3 }}
                        variant="contained"
                        color="warning"
                    >
                        {isSignup ? "signup" : "login"}
                    </Button>
                    <Button onClick={resetState} sx={{ marginTop: 3, borderRadius: 3 }}>
                        Change To {isSignup ? "login " : "signup"}
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default Auth;
