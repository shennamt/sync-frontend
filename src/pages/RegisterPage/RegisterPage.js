import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import authApi from 'api/authApi';

import {
  Box,
  TextField,
  // FormControlLabel,
  // Checkbox,
  Button,
  // Radio
} from '@mui/material'
// import RadioGroup from '@mui/material/RadioGroup';
import LoadingButton from '@mui/lab/LoadingButton'
import './RegisterPage.css'

const RegisterPage = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false) // checking on async action
  const [usernameErrText, setUsernameErrText] = useState('') // store err mssg for input fields
  const [passwordErrText, setPasswordErrText] = useState('')
  const [confirmPasswordErrText, setConfirmPasswordErrText] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUsernameErrText('') // set initial state of err mssg
    setPasswordErrText('')
    setConfirmPasswordErrText('')

    const data = new FormData(e.target) // getting values from form input
    const username = data.get('username').trim() // triming trailing whitespace
    const password = data.get('password').trim()
    const confirmPassword = data.get('confirmPassword').trim()

    let err = false

    if (username === '') {
      err = true
      setUsernameErrText('Please fill this field')
    }
    if (password === '') {
      err = true
      setPasswordErrText('Please fill this field')
    }
    if (confirmPassword === '') {
      err = true
      setConfirmPasswordErrText('Please fill this field')
    }
    if (password !== confirmPassword) {
      err = true
      setConfirmPasswordErrText('Confirm password not match')
    }

    if (err) return

    setLoading(true) // indicating submission in progress

    try {
      const res = await authApi.signup({
        username, password, confirmPassword
      })
      setLoading(false)
      localStorage.setItem('token', res.token)
      navigate('/')
    } catch (err) {
      const errors = err.data.errors 
      errors.forEach(e => {
        if (e.param === 'username') {
          setUsernameErrText(e.msg)
        }
        if (e.param === 'password') {
          setPasswordErrText(e.msg)
        }
        if (e.param === 'confirmPassword') {
          setConfirmPasswordErrText(e.msg)
        }
      })
      setLoading(false) // indicate form submission status
    }
  }

    return (
      <>
        <h1 className='sync__header'>SYNC</h1>
        <p className='body__text'>Create your account and Start Your Next Collaboration.</p>

        <Box
          component='form'
          sx={{ mt: 1 }}
          onSubmit={handleSubmit}
          noValidate
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            disabled={loading}
            error={usernameErrText !== ''}
            helperText={usernameErrText}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='password'
            label='Password'
            name='password'
            type='password'
            disabled={loading}
            error={passwordErrText !== ''}
            helperText={passwordErrText}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='confirmPassword'
            label='Confirm Password'
            name='confirmPassword'
            type='password'
            disabled={loading}
            error={confirmPasswordErrText !== ''}
            helperText={confirmPasswordErrText}
          />

          {/* <div className='input__field'>
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
          </div> */}

          <LoadingButton
            sx={{ mt: 3, mb: 2 }}
            variant='outlined'
            fullWidth
            color='success'
            type='submit'
            loading={loading}
          >
            Signup
          </LoadingButton>
        </Box>

        <Button
          component={Link}
          to='/login'
          sx={{ textTransform: 'none' }}
        >
          Already have an account? Login
        </Button>
    </>
  )
}

export default RegisterPage