import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed" color="info">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/movies">
            Films
          </Button>
        </Box>
        <Box sx={{ textAlign: "center", flexGrow: 1 }}>
          <Typography variant="h6" color="inherit">
            CineWatch
          </Typography>
        </Box>
        <Box sx={{ width: 150 }}></Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
