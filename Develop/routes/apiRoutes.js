// dependencies
var notesData = require("../data/notesData");
    console.log(notesData);
    
var path = require("path");

// routing
module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });

    app.post("/api/notes", function(req, res) {
        notesData.push(req.body);
        res.json(notesData);
    });

    app.delete("/api/notes:id", function(req, res) {
        let id = parseInt(req.params.id);
        delete notesData[id];
        res.json(notesData);

        console.log("app.get");
    });
}