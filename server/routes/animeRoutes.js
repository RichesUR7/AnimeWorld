const express = require('express');
const Anime = require('../models/Anime');

const router = express.Router();

// Get all anime
router.get('/', async (req, res) => {
    try {
        const animes = await Anime.find();
        res.json(animes);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Add new anime
router.post('/', async (req, res) => {
    try {
        const anime = new Anime(req.body);
        await anime.save();
        res.status(201).send('Anime added');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;

