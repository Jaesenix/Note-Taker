// dependencies (to get file path for html file)
var path = require("path");    

// routing
module.exports = function (app) {
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    // default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};

// if throws error may need a slash in addition asterisk