import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import './RegisterPage.css'
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Radio
} from '@mui/material'
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <div className='register'>
      <div className='register__header'>
        <h1 className='sync__header'>SYNC</h1>
        <p className='body__text'>Create your account and Start Your Next Collaboration.</p>
      </div>

      <form className='register__body' onSubmit={handleSubmit}>
        {/* <div className='input__field'>
          <TextField label="First Name" variant="outlined" size="small" placeholder="e.g Jane" fullWidth required/>
        </div>

        <div className='input__field'>
          <TextField label="Last Name" variant="outlined" size="small" placeholder="e.g. Doe" fullWidth required/>
        </div> */}

        <div className='input__field'>
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            placeholder="e.g. xyz@gmail.com"
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className='input__field'>
          <TextField
            label="Password"
            variant="outlined"
            size="small"
            type="password"
            placeholder="Enter your password"
            fullWidth
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {/* <div className='input__field'>
          <TextField label="Confirm Password" variant="outlined" size="small" type="password" placeholder="Re-enter your password" fullWidth required/>
        </div> */}

        <div className='input__field'>
          <FormControl className='radio__occupation'>
            <FormLabel>Occupation</FormLabel>
            <RadioGroup
              defaultValue="Student"
              aria-labelledby="demo-customized-radios"
              name="customized-radios"
              style = {{display: 'initial'}}
            >
              <FormControlLabel value="Student" control={<Radio />} label="Student" />
              <FormControlLabel value="Professional" control={<Radio />} label="Professional" />
            </RadioGroup>
          </FormControl>
        </div>

        <FormControlLabel control={<Checkbox defaultChecked />} label="I accept the terms and conditions." />
        <br />

        <div className='button'>
          <Button disabled={isLoading} variant="contained" fullWidth type='submit'>Login</Button>
        </div>

        {error && <div className="error">{error}</div>}
      </form>

      <div className='login__link'>
          <p>Already have an account? <Link to="/" style={{textDecoration:'none'}}>Login</Link></p>
      </div>

    </div>
  )
}

export default RegisterPage;