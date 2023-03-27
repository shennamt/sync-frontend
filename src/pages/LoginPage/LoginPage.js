import React from 'react'
import { useState } from "react";
import { useLogin } from 'hooks/useLogin';
import { Link } from "react-router-dom";
import './LoginPage.css'
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material'


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className='login'>
      <div className='login__header'>
        <h1 className='sync__header'>SYNC</h1>
        <p className='body__text'>Welcome back</p>
      </div>

      <form className='login__body' onSubmit={handleSubmit}>
        <div className='input__field__email'>
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            placeholder="Enter email adress"
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className='input__field__password'>
          <TextField
            label="Password"
            variant="outlined"
            size="small" 
            type= "password"
            placeholder="Enter password"
            fullWidth
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me signed in" />
        <br />

        <div className='button'>
          <Button disabled={isLoading} variant="contained" fullWidth>Login</Button>
        </div>

        <div className='forgot__link'>
          <Link style={{textDecoration:'none'}}>Forgot password?</Link>
        </div>

        <div className='signup__link'>
          Don't have an account? <Link to='/signup' style={{textDecoration:'none'}}> Sign Up</Link>
        </div>
        {error && <div className="error">{error}</div>}
      </form>

      <div className='footer'>
      <Link style={{textDecoration:'none'}}>Terms of use</Link> | <Link style={{textDecoration:'none'}}>Privacy Policy</Link>
      </div>
    </div>
  )
}

export default LoginPage;