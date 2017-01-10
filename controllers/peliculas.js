//File: controllers/tvshows.js
var mongoose = require('mongoose');
var Pelicula  = mongoose.model('Pelicula');

//GET - Return all tvshows in the DB
exports.findAllPeliculas = function(req, res) {
	Pelicula.find(function(err, peliculas) {
    if(err) res.send(500, err.message);

    console.log('GET /peliculas')
		res.status(200).jsonp(peliculas);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Pelicula.findById(req.params.id, function(err, pelicula) {
    if(err) return res.send(500, err.message);

    console.log('GET /pelicula/' + req.params.id);
		res.status(200).jsonp(pelicula);
	});
};

//POST - Insert a new TVShow in the DB
exports.addPelicula = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var pelicula = new Pelicula({
		title:    req.body.title,
		year: 	  req.body.year,
		author:  req.body.author
	});

	pelicula.save(function(err, pelicula) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(pelicula);
	});
};

//PUT - Update a register already exists
exports.updatePelicula = function(req, res) {
	Pelicula.findById(req.params.id, function(err, pelicula) {
		tvshow.title   = req.body.petId;
		tvshow.year    = req.body.year;
		tvshow.author = req.body.author;

		tvshow.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(pelicula);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deletePelicula = function(req, res) {
	Pelicula.findById(req.params.id, function(err, pelicula) {
		pelicula.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};