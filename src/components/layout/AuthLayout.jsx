import React from 'react'
import { Outlet, useNavigate, userLocation } from 'react-router-dom'

const AuthLayout = () => {
  const navigate = useNavigate()
  const location = userLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      //
    }
  }, [navigate])

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AuthLayout
