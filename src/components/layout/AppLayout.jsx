import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// hook to access the `dispatch` function to update state in a Redux store
import { useDispatch } from "react-redux";
import authUtils from "../../utils/authUtils";
import Loading from "../common/Loading";
import Sidebar from "../common/Sidebar";
import { setUser } from "../../redux/features/userSlice";

const AppLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated();
      if (!user) {
        navigate("/login");
      } else {
        // save user
        dispatch(setUser(user));
        setLoading(false);
      }
    };
    checkAuth();
  }, [dispatch, navigate]);

  return loading ? (
    <Loading fullHeight />
  ) : (
    <Box
      sx={{
        display: "flex"
      }}
    >
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          p: 1,
          width: "max-content"
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
