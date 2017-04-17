var Film = require('../film.js')

var assert = require('assert');

describe('Film', function () {

  var film;

  beforeEach(function () {

    film = new Film({

      title: "Titanic",

      actors: ["Leonardo DiCaprio"]

    });

  });

  it('should have title titanic', function () {

    assert.equal(film.title, "Titanic");

  });

  it('should have one actor',function(){
    assert.equal(film.actors.length,1)
  })

  it('should star leo, praise be upon him', function(){
    assert.equal(film.actors[0],"Leonardo DiCaprio")
  })

})