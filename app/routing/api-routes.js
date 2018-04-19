var tableData = require('../data/table.js');
var waitListData = require('../data/waitlist.js');


module.exports = function (app) {

    app.get('/api/tables', function (req, res) {
        res.json(tableData);
        console.log(tableData);
    });

    app.get('/api/waitlist', function(req, res){
        res.json(waitListData);
        console.log(waitListData);
	});

}