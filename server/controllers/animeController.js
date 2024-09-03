const Anime = require('../models/Anime');

// Get all anime
exports.getAllAnime = async (req, res) => {
    try {
        const animes = await Anime.find();
        res.json(animes);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Add new anime
exports.addAnime = async (req, res) => {
    try {
        const anime = new Anime(req.body);
        await anime.save();
        res.status(201).send('Anime added');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

