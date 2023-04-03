import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Box, TextField, Button, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const handleSubmit = () => {

  }

  return (
    <>
      <Box>
        <Typography sx={{
          color: '#1976d2',
          fontSize: '50px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: '20px'
        }}>
          SYNC
        </Typography>
        <Typography sx={{
          textAlign: 'center',
          marginTop: '5px',
          marginBottom: '20px'
        }}>
          Welcome back
        </Typography>
      </Box>

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
        /> 
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          variant='contained'
          fullWidth
          type='submit'
          loading={loading}
        >
          Login
        </LoadingButton>
      </Box>

      <Button
        component={Link}
        to='/signup'
        sx={{ textTransform: 'none' }}
      >
        Don't have an account? Signup
      </Button>
    </>
  )
}

export default LoginPage
