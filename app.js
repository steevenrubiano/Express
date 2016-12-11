var express = require("express");
var app = express();
/*var bodyParser = require("body-parser");
var methodOverride = require("method-override");*/
var mongoose = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/test', (err, res) => {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
/*app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());*/

// Import Models and controllers
var modelo = require('./modelo')(app, mongoose);
var controles = require('./controles');

// Example Route
var router = express.Router();
router.get('/', (req, res) => {
  res.send("Hello world!");
});
app.use(router);

// API routes
var pelicula = express.Router();

pelicula.route('/pelicula')
  .get(controles.findAllPeliculas)
  .post(controles.addPelicula);

pelicula.route('/pelicula/:id')
  .get(controles.findById)
  .put(controles.updatePelicula)
  .delete(controles.deletePelicula);

app.use('/api', pelicula);

// Start server
app.listen(8080, () => {
  console.log("Node server running on http://localhost:8080");
});