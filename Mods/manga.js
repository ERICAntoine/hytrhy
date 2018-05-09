const mongoose = require('mongoose');
var express = require('express');

mongoose.connect('mongodb://localhost:27017/manga');

var mangaSchema = new mongoose.Schema({
    name: String,
    genre: String,
    author: String
});

var mangaModel = mongoose.model('manga',mangaSchema);

module.exports = mangaModel;