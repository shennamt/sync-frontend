import "@fontsource/work-sans/300.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/700.css";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import AuthLayout from "./components/layout/AuthLayout";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  const theme = createTheme({
    palette: { mode: "light" }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      {/* to provide a baseline of CSS styles across browsers */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} /> {/* root path `/` */}
            <Route path="boards" element={<Home />} />
            <Route path="boards/:boardId" element={<Board />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
