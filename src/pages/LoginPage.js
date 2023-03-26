import React from 'react'
import './LoginPage.css'
import { TextField, FormControlLabel, Checkbox, Button, Link} from '@mui/material'

const LoginPage = () => {

  return (
    <div className='login'>
      <div className='login__header'>
        <h1 className='sync__header'>SYNC</h1>
        <p className='body__text'>Welcome back</p>
      </div>
      <div className='login__body'>
        <div className='input__field__email'>
          <TextField label="Email" variant="outlined" size="small" placeholder="Enter email adress" fullWidth required/>
        </div>
        <div className='input__field__password'>
          <TextField label="Password" variant="outlined" size="small" type= "password" placeholder="Enter password" fullWidth required/>
        </div>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me signed in" />
        <br />
        <div className='button'>
          <Button variant="contained" fullWidth>Login</Button>
        </div>
        <div className='forgot__link'>
          <Link>Forgot password?</Link>
        </div>
        <div className='signup__link'>
          <p>Don't have an account? <Link> Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
