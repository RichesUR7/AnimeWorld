import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const AnimeCard = ({ anime }) => (
  <Card>
    <CardMedia
      style={{ height: 140 }}
      image={anime.imageUrl}
      title={anime.title}
    />
    <CardContent>
      <Typography variant="h6">{anime.title}</Typography>
      <Typography variant="body2" color="textSecondary">{anime.description}</Typography>
    </CardContent>
  </Card>
);

export default AnimeCard;

