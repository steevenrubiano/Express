var mongoose = require('mongoose'),  
Schema   = mongoose.Schema;

var peliculaSchema = new Schema({  
  titulo:    { type: String },
  autor:     { type: Number },
  anio:  { type: String }
});

module.exports = mongoose.model('Pelicula', peliculaSchema); 