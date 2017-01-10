exports = module.exports = function(app, mongoose) {

    var peliculaSchema = new mongoose.Schema({
        title: 		{ type: String },
        year: 		{ type: String },
        author: 	{ type: String }
    });
    mongoose.model('Pelicula', peliculaSchema);
};