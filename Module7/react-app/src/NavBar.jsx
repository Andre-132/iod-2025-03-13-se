import { AppBar, Toolbar, Button, Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/bitcoin">
            Bitcoin Rates
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
