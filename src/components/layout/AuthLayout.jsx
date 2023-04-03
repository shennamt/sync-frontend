import React from 'react'
import { Container, Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import authUtils from '../../utils/authUtils.js'
import Loading from '../common/Loading'
import assets from '../../assets'

const AuthLayout = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => { // execute function component is mounted/ nav dependecy changes
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated() // checking if user is auth
      if (!isAuth) {
        setLoading(false)
      } else {
        navigate('/')
      }
    }
    checkAuth()
  }, [navigate])

  return (
    loading ? (
      <Loading fullHeight/>
    ) : (
      <Container component='main' maxWidth='xs'>
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <img src={assets.images.logo} style={{ width: '100px' }} alt='app logo' />
          <Outlet />
        </Box>
      </Container>
    )
  )
}

export default AuthLayout
