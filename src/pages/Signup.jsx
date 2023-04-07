import {
  Box,
  Button,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Typography
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import authApi from "../api/authApi";

const Signup = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [usernameErrText, setUsernameErrText] = useState("");
  const [passwordErrText, setPasswordErrText] = useState("");
  const [confirmPasswordErrText, setConfirmPasswordErrText] = useState("");
  const [occupation, setOccupation] = useState("student");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameErrText("");
    setPasswordErrText("");
    setConfirmPasswordErrText("");

    // const handleOccupationChange = (event) => {
    //   setOccupation(event.target.value);
    // };

    const data = new FormData(e.target);
    const username = data.get("username").trim();
    const password = data.get("password").trim();
    const confirmPassword = data.get("confirmPassword").trim();

    let err = false;

    if (username === "") {
      err = true;
      setUsernameErrText("Please fill this field");
    }
    if (password === "") {
      err = true;
      setPasswordErrText("Please fill this field");
    }
    if (confirmPassword === "") {
      err = true;
      setConfirmPasswordErrText("Please fill this field");
    }
    if (confirmPassword !== password) {
      err = true;
      setConfirmPasswordErrText(
        "The passwords you entered do not match. Please try again."
      );
    }

    if (err) return;

    setLoading(true);

    try {
      const res = await authApi.signup({
        username,
        password,
        confirmPassword,
        occupation
      });
      setLoading(false);
      localStorage.setItem("token", res.token);
      navigate("/");
    } catch (err) {
      const errors = err.data.errors;
      errors.forEach((e) => {
        if (e.param === "username") {
          setUsernameErrText(e.msg);
        }
        if (e.param === "password") {
          setPasswordErrText(e.msg);
        }
        if (e.param === "confirmPassword") {
          setConfirmPasswordErrText(e.msg);
        }
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Typography
        sx={{
          color: "#1976d2",
          fontSize: "50px",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "20px"
        }}
      >
        SYNC
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "17px",
          marginTop: "5px",
          marginBottom: "15px"
        }}
      >
        Create an account to Synchronise Your Next Collaboration
      </Typography>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit} noValidate>
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
        <TextField
          margin="normal"
          required
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          disabled={loading}
          error={confirmPasswordErrText !== ""}
          helperText={confirmPasswordErrText}
        />
        <div className="input__field">
          <FormControl className="radio__occupation">
            <FormLabel>Occupation</FormLabel>
            <RadioGroup
              defaultValue="Student"
              aria-labelledby="demo-customized-radios"
              name="customized-radios"
              style={{ display: "initial" }}
              onChange={(e) => setOccupation(e.target.value)}
            >
              <FormControlLabel
                value="Student"
                control={<Radio />}
                label="Student"
              />
              <FormControlLabel
                value="Professional"
                control={<Radio />}
                label="Professional"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          variant="contained"
          fullWidth
          type="submit"
          loading={loading}
        >
          Sign Up
        </LoadingButton>
      </Box>
      <Button component={Link} to="/login" sx={{ textTransform: "none" }}>
        Already have an account? Login
      </Button>
    </>
  );
};

export default Signup;
