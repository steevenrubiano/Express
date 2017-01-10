var express         = require("express"),
    app             = express(),
    /*bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),*/
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/peliculas', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
/*app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());*/

// Import Models and controllers
var models     = require('./models/pelicula')(app, mongoose);
var PeliculaCtrl = require('./controllers/peliculas');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
var peliculas = express.Router();

peliculas.route('/peliculas')
  .get(PeliculaCtrl.findAllPeliculas)
  .post(PeliculaCtrl.addPelicula);

peliculas.route('/peliculas/:id')
  .get(PeliculaCtrl.findById)
  .put(PeliculaCtrl.updatePelicula)
  .delete(PeliculaCtrl.deletePelicula);

app.use('/api', peliculas);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});