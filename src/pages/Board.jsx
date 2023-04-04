import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography
} from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import boardApi from "../api/boardApi";

const Board = () => {
  const { boardId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const getBoard = async () => {
      try {
        const res = await boardApi.getOne(boardId);
        setTitle(res.title);
        setDescription(res.description);
        setSections(res.sections);
        setIsFavourite(res.favourite);
        console.log(res);
      } catch (err) {
        alert(err);
        console.log(err);
      }
    };
    getBoard();
  }, [boardId]);

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
        <IconButton variant="outlined" color="error">
          <DeleteOutlineIcon />
        </IconButton>
      </Box>
      <Box sx={{ padding: "10px 50px" }}>
        <Box>
          <TextField
            value={title}
            placeholder="Untitled"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-input": { padding: 0 },
              "& .MuiOutlinedInput-notchedOutlined": { border: "unset" },
              "& .MuiOutlinedInput-root": {
                fontSize: "2rem",
                fontWeight: "700"
              }
            }}
          />
          <TextField
            value={description}
            placeholder="Add a description"
            variant="outlined"
            multiline
            fullWidth
            sx={{
              "& .MuiOutlinedInput-input": { padding: 0 },
              "& .MuiOutlinedInput-notchedOutlined": { border: "unset" },
              "& .MuiOutlinedInput-root": { fontSize: "0.8rem" }
            }}
          />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Button>Add section</Button>
            <Typography variant="body2" fontWeight="700">
              {sections.length} Sections
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ margin: "10px 0" }} />
        {/* Kanban board */}
      </Box>
    </>
  );
};

export default Board;
