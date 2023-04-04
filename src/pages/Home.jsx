import { Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux"
import { setBoards } from "../redux/features/boardSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import boardApi from "../api/boardApi";

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const createBoard = async () => {
    setLoading(true) // something is happening
    try {
      const res = await boardApi.create() 
      dispatch(setBoards([res])) // passes arr with res as payload. new board will be added to existing arr instead of replaced.
      navigate(`/boards/${res.id}`) // nav to newly created board
    } catch (err) {
      alert(err)
    } finally {
      setLoading(false)
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <LoadingButton
        variant="outlined"
        onClick={createBoard}
        loading={loading}
      >
        Click here to SYNC your next collaboration

      </LoadingButton>
    </Box>
  );
};

export default Home;
