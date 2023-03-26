import React from 'react'
import './RegisterPage.css'
import { TextField, FormControlLabel, Checkbox, Button, Link} from '@mui/material'

const RegisterPage = () => {

  return (
    <div className='register'>
      <div className='register__header'>
        <h1 className='sync__header'>SYNC</h1>
        <p className='body__text'>Create your account</p>
      </div>

      <div className='register__body'>
        <div className='input__firstname'>
          <TextField label="First Name" variant="outlined" size="small" placeholder="Enter your first name" fullWidth required/>
        </div>

        <div className='input__lastname'>
          <TextField label="Last Name" variant="outlined" size="small" placeholder="Enter your last name" fullWidth required/>
        </div>

        <div className='input__occuptation'>
          <TextField label="Occuptation" variant="outlined" size="small" placeholder="e.g. Student" fullWidth required/>
        </div>

        <div className='input__email'>
          <TextField label="Email" variant="outlined" size="small" placeholder="Enter your email address" fullWidth required/>
        </div>

        <div className='input__password'>
          <TextField label="Password" variant="outlined" size="small" placeholder="Enter your password" fullWidth required/>
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
          <p>Already have an account? <Link>Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;