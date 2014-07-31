var mongoose= require('mongoose');


module.exports= mongoose.model('strumenti', {

	tipo: String,
	categoria: String,
	link: String,
	descrizione: String

});