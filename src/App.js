import { createTheme, Grid, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" justifyItems="center" alignItems="center">
        <Grid item>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
