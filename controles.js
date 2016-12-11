var mongoose = require('mongoose');  
var Pelicula  = mongoose.model('Pelicula');

//GET - Return all peliculas in the DB
exports.findAllPeliculas = (req, res) => {  
    Pelicula.find((err, peliculas) => {
    if(err) res.send(500, err.message);

    console.log('GET /peliculas')
        res.status(200).jsonp(peliculas);
    });
};

//GET - Return a pelicula with specified ID
exports.findById = (req, res) => {  
    Pelicula.findById(req.params.id, (err, pelicula) => {
    if(err) return res.send(500, err.message);

    console.log('GET /pelicula/' + req.params.id);
        res.status(200).jsonp(pelicula);
    });
};

//POST - Insert a new pelicula in the DB
exports.addPelicula = (req, res) => {  
    console.log('POST');
    console.log(req.body);

    var pelicula = new Pelicula({
        titulo: req.body.titulo,
        autor: req.body.autor,
        anio: req.body.anio
    });

    Pelicula.save((err, pelicula) => {
        if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(pelicula);
    });
};

//PUT - Update a register already exists
exports.updatePelicula = (req, res) => {  
    Pelicula.findById(req.params.id, (err, pelicula) => {
        pelicula.titulo   = req.body.titulo;
        pelicula.autor    = req.body.autor;
        pelicula.anio = req.body.anio;

        pelicula.save((err) => {
            if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(pelicula);
        });
    });
};

//DELETE - Delete a Pelicula with specified ID
exports.deletePelicula = (req, res) => {  
    Pelicula.findById(req.params.id, (err, pelicula) => {
        pelicula.remove((err) => {
            if(err) return res.status(500).send(err.message);
      res.status(200).send();
        })
    });
};