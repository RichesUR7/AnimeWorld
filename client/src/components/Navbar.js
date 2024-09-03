import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        AnimeVerse
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/anime-database">Anime Database</Button>
      <Button color="inherit" component={Link} to="/news">News</Button>
      <Button color="inherit" component={Link} to="/reviews">Reviews</Button>
      <Button color="inherit" component={Link} to="/community">Community</Button>
      <Button color="inherit" component={Link} to="/about">About Us</Button>
      <Button color="inherit" component={Link} to="/support">Support</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;

