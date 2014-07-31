var mongoose= require('mongoose');

mongoose.connect('mongodb://datastrum:videocode@ds061258.mongolab.com:61258/datastrum');


module.exports= mongoose.connection;