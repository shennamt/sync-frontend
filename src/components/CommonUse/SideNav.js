import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import assets from "../../assets/index";
import projectApi from "../../api/projectApi";
import { setProjects } from "../../redux/features/projectSlice";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import FavouriteList from "./FavouriteList";

import {
  Box,
  Drawer,
  List,
  ListItem,
  Typography,
  IconButton,
  ListItemButton
} from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const SideNav = () => {
  const user = useSelector((state) => state.user.value);
  const projects = useSelector((state) => state.project.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);

  const sidebarWidth = 250;

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await projectApi.getAll();
        dispatch(setProjects(res));
      } catch (err) {
        alert(err);
      }
    };
    getProjects();
  }, [dispatch]);

  useEffect(() => {
    const activeItem = projects.findIndex((e) => e.id === projectId);
    if (projects.length > 0 && projectId === undefined) {
      navigate(`/projects/${projects[0].id}`);
    }
    setActiveIndex(activeItem);
  }, [projects, projectId, navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const onDragEnd = async ({ source, destination }) => {
    const newList = [...projects];
    const [removed] = newList.splice(source.index, 1);
    newList.splice(destination.index, 0, removed);

    const activeItem = newList.findIndex((e) => e.id === projectId);
    setActiveIndex(activeItem);
    dispatch(setProjects(newList));

    try {
      await projectApi.updatePositoin({ projects: newList });
    } catch (err) {
      alert(err);
    }
  };

  // let greeting;
  // if (user && user.occupation === "professional") {
  //   greeting = "Hello";
  // } else {
  //   greeting = "Goodbye";
  // }

  const addProject = async () => {
    try {
      const res = await projectApi.create();
      const newList = [res, ...projects];
      dispatch(setProjects(newList));
      navigate(`/projects/${res.id}`);
    } catch (err) {
      alert(err);
    }
  };

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
          backgroundColor: assets.colors.secondary
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
            <Typography variant="body2" fontWeight="700">
              {user.username}
            </Typography>
            <IconButton onClick={logout}>
              <LogoutOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
        </ListItem>
        <Box sx={{ paddingTop: "10px" }} />
        <FavouriteList />
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
            <Typography variant="body2" fontWeight="700">
              Private
            </Typography>
            <IconButton onClick={addProject}>
              <AddBoxOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
        </ListItem>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            key={"list-project-droppable-key"}
            droppableId={"list-project-droppable"}
          >
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {projects.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <ListItemButton
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        selected={index === activeIndex}
                        component={Link}
                        to={`/projects/${item.id}`}
                        sx={{
                          pl: "20px",
                          cursor: snapshot.isDragging
                            ? "grab"
                            : "pointer!important"
                        }}
                      >
                        <Typography
                          variant="body2"
                          fontWeight="700"
                          sx={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                        >
                          {item.icon} {item.title}
                        </Typography>
                      </ListItemButton>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </List>
    </Drawer>
  );
};

export default SideNav;
