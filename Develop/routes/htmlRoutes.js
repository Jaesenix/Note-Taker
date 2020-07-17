// dependencies (to get file path for html file)
var path = require("path");
var fs = require("fs");
var db = require("../db/db.json");

// routing
module.exports = function (app) {
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/notes.html"));
    });
    // default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/index.html"));
    });

    // retrieve, read, and parse data
    var dbNotes = JSON.parse(
        fs.readFileSync(path.join(_dirname, "../db/db.json"), (err, data) => {
            if (err) throw err;
        })
    );

    // store, write, and stringify data 
    var dbAddNotes = dbNotes => {
        fs.writeFileSync(path.join(_dirname, "../db/db.json"),
            JSON.stringify(dbNotes)
        );

    };
};


