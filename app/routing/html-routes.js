var tableData 		= require('../data/table.js');
var waitListData 	= require('../data/waitlist.js');
var path = require('path');

module.exports = function(app){

	app.get('/tables', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/tables.html'));
	});

	app.get('/reserve', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/reserve.html'));
    });
    
	app.use(function(req, res){
        // console.log(path.join(__dirname));
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}