var tableData = require("../TABLE FILE");
var waitListData = require("../WAITNING LIST FILE");

module.exports = function (app) {

    app.get("/API TABLE FILES", function (req, res) {
        res.json(tableData);
    });

    app.get("/API WAITLIST FILE", function (req, res) {
        res.json(waitListData);
    });

    app.post("/API TABLE FILE", function (req, res) {

        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }

        else {
            waitListData.push(req.body);
            res.json(false);
        }
    });
};
