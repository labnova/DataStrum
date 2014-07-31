var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


var strumentiSchema= require('../schemas/strumenti');


/*
functions.inserisci= function (req, res) {

	var record= new strumentiSchema(strumenti[tipo].getInformation());

	record.save(function(err){
		if(err) {
			console.log(err);
			res.status(500).json({status:'failed'});
		} else {
			res.json({status:'ok, bro'});
		}


	});


} */