import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { Box, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import projectApi from "../api/projectApi";
import EmojiPicker from "components/CommonUse/EmojiPicker";
import Kanban from "components/CommonUse/Kanban";
// import { setProjects } from "../redux/features/projectSlice";
// import { setFavouriteList } from "../redux/features/favouriteSlice";

let timer;
const timeout = 500;

const Project = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { projectId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);
  const [icon, setIcon] = useState("");

  const [projects, setProjects] = useState([])
  // const projects = await 
  //  useSelector((state) => {
  //   console.log("state");
  //   console.log(state);
  //   return state.projects.value});
  const favouriteList = []//useSelector((state) => state.favourites.value);

  // useEffect((projectId) => {
  //   const getProject = async (projectId) => {
  //     try {
  //       const res = await projectApi.getOne(projectId);
  //       setTitle(res.title);
  //       setDescription(res.description);
  //       setSections(res.sections);
  //       setIsFavourite(res.favourite);
  //       setIcon(res.icon);
  //     } catch (err) {
  //       alert(err);
  //     }
  //   };
  //   // getProject(projectId);
  // }, [projectId]);
  const onIconChange = async (newIcon) => {
    let temp = [...projects];
    const index = temp.findIndex((e) => e.id === projectId);
    temp[index] = { ...temp[index], icon: newIcon };

    if (isFavourite) {
      let tempFavourite = [...favouriteList];
      const favouriteIndex = tempFavourite.findIndex((e) => e.id === projectId);
      tempFavourite[favouriteIndex] = {
        ...tempFavourite[favouriteIndex],
        icon: newIcon
      };
      // dispatch(setFavouriteList(tempFavourite));
    }

    setIcon(newIcon);
    // dispatch(setProjects(temp));
    try {
      await projectApi.update(projectId, { icon: newIcon });
    } catch (err) {
      alert(err);
    }
  };

  const updateTitle = async (e) => {}
  //   clearTimeout(timer);
  //   const newTitle = e.target.value;
  //   setTitle(newTitle);

  //   let temp = [...projects];
  //   const index = temp.findIndex((e) => e.id === projectId);
  //   temp[index] = { ...temp[index], title: newTitle };

  //   if (isFavourite) {
  //     let tempFavourite = [...favouriteList];
  //     const favouriteIndex = tempFavourite.findIndex((e) => e.id === projectId);
  //     tempFavourite[favouriteIndex] = {
  //       ...tempFavourite[favouriteIndex],
  //       title: newTitle
  //     };
  //     dispatch(setFavouriteList(tempFavourite));
  //   }

  //   dispatch(setProjects(temp));

  //   timer = setTimeout(async () => {
  //     try {
  //       await projectApi.update(projectId, { title: newTitle });
  //     } catch (err) {
  //       alert(err);
  //     }
  //   }, timeout);
  // };

  const updateDescription = async (e) => {
    clearTimeout(timer);
    const newDescription = e.target.value;
    setDescription(newDescription);
    timer = setTimeout(async () => {
      try {
        await projectApi.update(projectId, { description: newDescription });
      } catch (err) {
        alert(err);
      }
    }, timeout);
  };

  const addFavourite = async () => {
    try {
      const project = await projectApi.update(projectId, {
        favourite: !isFavourite
      });
      let newFavouriteList = [...favouriteList];
      if (isFavourite) {
        newFavouriteList = newFavouriteList.filter((e) => e.id !== projectId);
      } else {
        newFavouriteList.unshift(project);
      }
      // dispatch(setFavouriteList(newFavouriteList));
      setIsFavourite(!isFavourite);
    } catch (err) {
      alert(err);
    }
  };

  const deleteProject = async () => {
    try {
      await projectApi.delete(projectId);
      if (isFavourite) {
        const newFavouriteList = favouriteList.filter(
          (e) => e.id !== projectId
        );
        // dispatch(setFavouriteList(newFavouriteList));
      }

      // const newList = projects.filter((e) => e.id !== projectId);
      // if (newList.length === 0) {
      //   navigate("/projects");
      // } else {
      //   navigate(`/projects/${newList[0].id}`);
      // }
      // dispatch(setProjects(newList));
    } catch (err) {
      alert(err);
    }
  };
  

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <IconButton variant="outlined" onClick={addFavourite}>
          {isFavourite ? (
            <StarOutlinedIcon color="warning" />
          ) : (
            <StarBorderOutlinedIcon />
          )}
        </IconButton>
        <IconButton variant="outlined" color="error" onClick={deleteProject}>
          <DeleteOutlinedIcon />
        </IconButton>
      </Box>
      <Box sx={{ padding: "10px 50px" }}>
        <Box>
          emoji picker
          <EmojiPicker icon={icon} onChange={onIconChange} />
          <TextField
            value={title}
            onChange={updateTitle}
            placeholder="Untitled"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-input": { padding: 0 },
              "& .MuiOutlinedInput-notchedOutline": { border: "unset " },
              "& .MuiOutlinedInput-root": {
                fontSize: "2rem",
                fontWeight: "700"
              }
            }}
          />
          <TextField
            value={description}
            onChange={updateDescription}
            placeholder="Add a description"
            variant="outlined"
            multiline
            fullWidth
            sx={{
              "& .MuiOutlinedInput-input": { padding: 0 },
              "& .MuiOutlinedInput-notchedOutline": { border: "unset " },
              "& .MuiOutlinedInput-root": { fontSize: "0.8rem" }
            }}
          />
        </Box>
        <Box>
          Kanban board
          <Kanban data={sections} projectId={projectId} />
        </Box>
      </Box>
    </>
  );
};

export default Project;
