import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./css/custom-scrollbar.css";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "components/layout/AppLayout";
import AuthLayout from "./components/layout/AuthLayout";
import HomePage from "pages/HomePage";
import ProjectPage from "pages/ProjectPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import LoginPage from "pages/LoginPage/LoginPage";

function App() {
  const theme = createTheme({
    palette: { mode: "light" }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<RegisterPage />} />
          </Route>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<HomePage />} />
            <Route path="projects/:projectsId" element={<ProjectPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
