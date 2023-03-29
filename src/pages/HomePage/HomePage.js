import React from "react"
import { useDispatch } from "react-redux"
import { setProjects } from "redux/features/projectSlice"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import projectApi from "api/projectApi"

import SideNav from "components/CommonUse/SideNav"
import { Box } from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton'


const HomePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const createProject = async () => {
    setLoading(true)
    try {
      const res = await projectApi.create()
      dispatch(setProjects([res]))
      navigate(`projects/${res.id}`)
    } catch (err) {
      alert(err)
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="HomePage" style={{ display: 'flex', alignItems: 'center' }}>
      <Box>
        <SideNav />
      </Box>
      <Box sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      }}>
        <LoadingButton
        variant="outlined"
        onClick={createProject}
        loading={loading}
        >
          Click here to Start Your Next Collaboration
        </LoadingButton>
      </Box>
    </div>
  );
};

export default HomePage;