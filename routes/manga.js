var express = require('express');
var router = express.Router();
const mangaModel = require('../Mods/manga');
var mongoose = require('mongoose');
const body = require('body-parser');


router.get('/', function (req, res) {
  mangaModel.find((err, result) => {
    if (err) {
      res.status(500).send("EEEEROOOOOOR FInd");
    }
    
    res.status(200).send(result);
  });
});

router.post('/', (req, res) => {
  mangaModel.create({
    name: req.fields.name,
    genre: req.fields.genre,
    author: req.fields.author
  }).then((err) => {
    res.status(200).send(err);
  }).catch(err => res.status(500).send(err));
})
module.exports = router;