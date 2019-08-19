 const express = require('express');
 const router = express.Router();
 const axios = require('axios');

//Get Posts
router.get('/', (req, res) => {
    axios.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json`)
    .then((resp) => res.send(resp.data));
});


 module.exports = router;