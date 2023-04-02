import React from "react";
import { Box } from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton'
import { useDispatch } from "react-redux"
import { setProjects } from "redux/features/projectSlice";
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import projectApi from "api/projectApi";

const HomePage = () => {

  // this code is for rendering either kanban or agile later
  // let greeting;
  // if (user && user.occupation === "professional") {
  //   greeting = "Hello";
  // } else {
  //   greeting = "Goodbye";
  // }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  console.log("hello")
  const createProject = async () => {
    console.log("res")
    setLoading(true);
    try {
      const res = await projectApi.create();
      dispatch(setProjects([res]));
      console.log("res")
      console.log(res)
      navigate(`/projects/${res._id}`);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box sx={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <LoadingButton
        variant='outlined'
        color='success'
        onClick={createProject}
        loading={loading}
      >
        Click here to Sync Your Next Collaboration
      </LoadingButton>
    </Box>
  )
}

export default HomePage;
