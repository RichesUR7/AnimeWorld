import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimeCard from '../components/AnimeCard';

const AnimeDatabase = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    axios.get('/api/anime')
      .then(response => setAnimeList(response.data))
      .catch(error => console.error('Error fetching anime:', error));
  }, []);

  return (
    <div>
      {animeList.map(anime => (
        <AnimeCard key={anime._id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeDatabase;

