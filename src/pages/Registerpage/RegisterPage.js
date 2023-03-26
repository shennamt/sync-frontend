import React from 'react'
import './RegisterPage.css'
import { TextField, FormControlLabel, Checkbox, Button, Link, Radio} from '@mui/material'
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RegisterPage = () => {

  return (
    <div className='register'>
      <div className='register__header'>
        <h1 className='sync__header'>SYNC</h1>
        <p className='body__text'>Create your account and Start Your Next Collaboration.</p>
      </div>

      <div className='register__body'>
        <div className='input__field'>
          <TextField label="First Name" variant="outlined" size="small" placeholder="e.g Jane" fullWidth required/>
        </div>

        <div className='input__field'>
          <TextField label="Last Name" variant="outlined" size="small" placeholder="e.g. Doe" fullWidth required/>
        </div>

        <div className='input__field'>
          <TextField label="Email" variant="outlined" size="small" placeholder="e.g. xyz@gmail.com" fullWidth required/>
        </div>

        <div className='input__field'>
          <TextField label="Password" variant="outlined" size="small" type="password" placeholder="Enter your password" fullWidth required/>
        </div>

        <div className='input__field'>
          <TextField label="Confirm Password" variant="outlined" size="small" type="password" placeholder="Re-enter your password" fullWidth required/>
        </div>

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
          <Button variant="contained" fullWidth>Login</Button>
        </div>
        <div className='login__link'>
          <p>Already have an account? <Link>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;