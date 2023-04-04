import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box, IconButton, TextField } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import boardApi from "../api/boardApi";
import Kanban from "../components/common/Kanban";
import { setBoards } from "../redux/features/boardSlice";
// import { setFavouriteList } from "../redux/features/favouriteSlice";

let timer;
const timeout = 500;

const Board = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { boardId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

  const boards = useSelector((state) => state.board.value);
  // const favouriteList = useSelector((state) => state.favourites.value);

  useEffect(() => {
    const getBoard = async () => {
      try {
        const res = await boardApi.getOne(boardId);
        setTitle(res.title);
        setDescription(res.description);
        setSections(res.sections);
        setIsFavourite(res.favourite);
        // console.log(res);
      } catch (err) {
        // alert(err);
        console.log(err);
      }
    };
    getBoard();
  }, [boardId]);

  const updateTitle = async (e) => {
    clearTimeout(timer);
    const newTitle = e.target.value;
    setTitle(newTitle);
    let temp = [...boards];
    const index = temp.findIndex((e) => e.id === boardId);
    temp[index] = { ...temp[index], title: newTitle };
    // if (isFavourite) {
    //   let tempFavourite = [...favouriteList];
    //   const favouriteIndex = tempFavourite.findIndex((e) => e.id === boardId);
    //   tempFavourite[favouriteIndex] = {
    //     ...tempFavourite[favouriteIndex],
    //     title: newTitle
    //   };
    // dispatch(setFavouriteList(tempFavourite));
    // }
    dispatch(setBoards(temp));
    timer = setTimeout(async () => {
      try {
        await boardApi.update(boardId, { title: newTitle });
      } catch (err) {
        console.log("timer: err\n", err);
        // alert(err);
      }
    }, timeout);
  };

  const updateDescription = async (e) => {
    clearTimeout(timer);
    const newDescription = e.target.value;
    setDescription(newDescription);
    timer = setTimeout(async () => {
      try {
        await boardApi.update(boardId, { description: newDescription });
      } catch (err) {
        console.log("err\n", err);
        // alert(err)
      }
    }, timeout);
  };

  const deleteBoard = async () => {
    try {
      await boardApi.delete(boardId);
      // if (isFavourite) {
      //   const newFavouriteList = favouriteList.filter(e => e.id !== boardId)
      //   dispatch(setFavouriteList(newFavouriteList))
      // }

      const newList = boards.filter((e) => e.id !== boardId);
      if (newList.length === 0) {
        navigate("/boards");
      } else {
        navigate(`/boards/${newList[0].id}`);
      }
      dispatch(setBoards(newList));
    } catch (err) {
      console.log("err\n", err);
      // alert(err)
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
        <IconButton variant="outlined">
          {isFavourite ? (
            <StarOutlineIcon color="warning" />
          ) : (
            <StarBorderOutlinedIcon />
          )}
        </IconButton>
        <IconButton variant="outlined" color="error" onClick={deleteBoard}>
          <DeleteOutlineIcon />
        </IconButton>
      </Box>
      <Box sx={{ padding: "10px 50px" }}>
        <Box>
          <TextField
            value={title}
            onChange={updateTitle}
            placeholder="Untitled"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-input": { padding: 0 },
              "& .MuiOutlinedInput-notchedOutline": { border: "unset" },
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
              "& .MuiOutlinedInput-notchedOutline": { border: "unset" },
              "& .MuiOutlinedInput-root": { fontSize: "0.8rem" }
            }}
          />
        </Box>
        <Box>
          {/* Kanban board */}
          <Kanban data={sections} boardId={boardId} />
        </Box>
      </Box>
    </>
  );
};

export default Board;
