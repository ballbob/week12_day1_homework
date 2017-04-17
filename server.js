//make bodyParser
var bodyParser = require('body-parser')
var express = require('express');
var app = express();
var path = require('path')


//specifies the html page for the webpage
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

//specify the directories for the express object to use
app.use(express.static('client/build'));
app.use(require('./client/controllers'))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//specifies the port/address to use for the website
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});
