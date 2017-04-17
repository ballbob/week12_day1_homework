//this is the films controller file
var express = require('express')
var filmRouter = new express.Router()
var Review = require('../client/src/models/review.js')
var Film = require('../client/src/models/film.js')
var Films = require('../client/src/models/films.js')

var filmsArray = new Films()

//index for films and their reviews
filmRouter.get('/',function(req,res){
  res.json(filmsArray)
})

//index for individual films and their respective review
filmRouter.get('/:id',function(req,res){
  console.log(filmsArray)
  res.json({data:filmsArray[req.params.id]})
})


module.exports = filmRouter