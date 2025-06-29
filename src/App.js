import "./App.css";
import { Profile } from "./Profile/Profile";
import Grid from "@mui/material/Grid";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {  Outlet, NavLink } from "react-router";

function App() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ marginBottom: 3}}>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>

          <NavLink className={"nav-link"} to="/" end>
                  About
                </NavLink>
                <NavLink className={"nav-link"}  to="/resume" end>
                  Resume
                </NavLink>
                <NavLink className={"nav-link"}  to="/portfolio">Projects</NavLink>
        </Toolbar>
      </AppBar>
    </Box>
      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center'}}>
        <Grid size={{ xs: 12, md: 2 }}>
          <Profile />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Outlet/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
