const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    title: String,
    genre: [String],
    releaseDate: Date,
    description: String,
    imageUrl: String,
    episodes: Number
});

const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;

