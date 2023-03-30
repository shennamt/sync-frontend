import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { useAuthContext } from "hooks/useAuthContext"
import { useLogout } from 'hooks/useLogout'


import { useEffect } from 'react'
import { setProjects } from 'redux/features/projectSlice'
import projectApi from 'api/projectApi'

import {
  Box,
  Drawer,
  List,
  ListItem,
  Typography,
  IconButton
} from '@mui/material'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'

const SideNav = () => {
  // const user = useSelector((state) => state.user.value)
  // const navigate = useNavigate()
  // const logout = () => {
  //   localStorage.removeItem('token')
  //   Navigate('/login')
  // }

  const { user } = useAuthContext()
  const { logout } = useLogout()
  const sidebarWidth = 250
  const dispatch = useDispatch()
  const projects = useSelector((state) => state.project.value)

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await projectApi.getAll()
        dispatch(setProjects(res))
      } catch (err) {
        alert(err)
      }
    }
    getProjects()
  }, [dispatch]) // i wonder if i can remove this from dependency array

  useEffect(() => {
    console.log(projects)
  }, [projects])

  const handleClick = () => {
    logout();
  };

  // let greeting;
  // if (user && user.occupation === "professional") {
  //   greeting = "Hello";
  // } else {
  //   greeting = "Goodbye";
  // }

  return (
    <Drawer
      container={window.document.body}
      variant="permanent"
      open={true}
      sx={{
        width: sidebarWidth,
        height: "100vh",
        "& > div": { borderRight: "none" }
      }}
    >
      <List
        disablePadding
        sx={{
          width: sidebarWidth,
          height: "100vh",
          backgroundColor: "#1976d2"
        }}
      >
        <ListItem>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Typography
              variant="body2"
              fontWeight="700"
              style={{ color: "white" }}
            >
              {user.email}
            </Typography>
            <IconButton onClick={handleClick}>
              <LogoutOutlinedIcon fontSize="small" style={{ color: "white" }} />
            </IconButton>
          </Box>
        </ListItem>
        <Box sx={{ paddingTop: "10px" }} />
        <ListItem>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Typography
              variant="body2"
              fontWeight="700"
              style={{ color: "white" }}
            >
              {" Mode: " + user.occupation}
            </Typography>
          </Box>
        </ListItem>
        <Box sx={{ paddingTop: "10px" }} />
        <ListItem>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Typography
              variant="body2"
              fontWeight="700"
              style={{ color: "white" }}
            >
              Favourites
            </Typography>
          </Box>
        </ListItem>
        <Box sx={{ paddingTop: "10px" }} />
        <ListItem>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Typography
              variant="body2"
              fontWeight="700"
              style={{ color: "white" }}
            >
              Private
            </Typography>
            <IconButton>
              <AddBoxOutlinedIcon fontSize="small" style={{ color: "white" }} />
            </IconButton>
          </Box>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideNav;
