import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import authApi from "../api/authApi";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [usernameErrText, setUsernameErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameErrText("");
    setPasswordErrText("");

    const data = new FormData(e.target);
    const username = data.get("username").trim();
    const password = data.get("password").trim();

    let err = false;

    if (username === "") {
      err = true;
      setUsernameErrText("Please fill this field");
    }
    if (password === "") {
      err = true;
      setPasswordErrText("Please fill this field");
    }

    if (err) return;

    setLoading(true);

    try {
      const res = await authApi.login({
        username,
        password
      });
      console.log("Signup.jsx: res\n", res);
      setLoading(false);
      localStorage.setItem("token", res.token);
      navigate("/");
    } catch (err) {
      const errors = err.data.errors;
      console.log("Signup.jsx: errors\n", errors);
      errors.forEach((e) => {
        if (e.param === "username") {
          setUsernameErrText(e.msg);
        }
        if (e.param === "password") {
          setPasswordErrText(e.msg);
        }
      });
      setLoading(false);
    }
  };
  return (
    <>
      {/* Box component is used to render a form */}
      {/* noValidate - the form should not be validated on submit */}
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
        {/* form control component that provides an input field for text input */}
        {/* input is required */}
        {/* f`TextField` component should take up the full width of its container */}
        {/* `disable={loading}` specifies whether the TextField component */}
        {/* should be disabled or not. The value of loading is assumed to be a boolean */}
        {/* that indicates whether the component should be disabled or not. When */}
        {/* loading is true, the TextField component will be disabled and the user will not be able to interact with it. */}
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          disabled={loading}
          error={usernameErrText !== ""}
          helperText={usernameErrText}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          disabled={loading}
          error={passwordErrText !== ""}
          helperText={passwordErrText}
        />
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          variant="outlined"
          fullWidth
          color="success"
          type="submit"
        >
          Login
        </LoadingButton>
      </Box>
      {/* text of the button will not be transformed e.g. capitalized or lowercase */}
      <Button component={Link} to="/signup" sx={{ textTransform: "none" }}>
        Don't have an account? Signup
      </Button>
    </>
  );
};

export default Login;
