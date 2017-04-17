//main index controller. this should display a list of all the films

var express = require('express')
var router = new express.Router()

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname,  '..', '/index.html'));
})

router.use('/films',require('./films'))

module.exports = router