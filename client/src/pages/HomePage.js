import React from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import CarouselComponent from '../components/Carousel';

const HomePage = () => {
  const images = [
    'path-to-image1.jpg',
    'path-to-image2.jpg',
    'path-to-image3.jpg'
  ];

  return (
    <Container>
      <Typography variant="h2" align="center">Explore the World of Anime</Typography>
      <TextField
        label="Search for anime..."
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary">Search</Button>
      <CarouselComponent images={images} />
      {/* Add other featured sections */}
    </Container>
  );
};

export default HomePage;

