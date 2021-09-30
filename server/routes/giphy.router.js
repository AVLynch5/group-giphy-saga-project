const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

//get route to search through giphy 
router.get('/:query', (req, res) => {
    console.log(req.params.query);
    const queryString = req.params.query;
    // const queryString = 'hockey';
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${queryString}&limit=25&offset=0&rating=g&lang=en
`)
        .then(response => {
            res.send(response.data);
        }).catch(error => {
            res.sendStatus(500);
        });
});

module.exports = router;