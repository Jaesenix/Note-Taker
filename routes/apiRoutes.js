// dependencies
const path = require("path");
const fs = require("fs");
const dbData = require("../db.json");


module.exports = function (app) {

    // // retrieve/read data
    // fs.readFileSync(path.join(__dirname, "../db.json"), (err, data) => {
    //     if (err) throw err;
    // });

    // routing
    app.get("/api/notes", function (req, res) {
        res.json(dbData);
    });

    app.post("/api/notes", function (req, res) {
        dbData.push(req.body);
    res.json(true);    });

    fs.writeFileSync("../db.json", (savedNote));
    console.log("Note saved!", Content = ", newNote");
};
    // app.delete("/api/notes:id", function(req, res) {
    //     let id = parseInt(req.params.id);
    //     delete notesData[id - 1];
    //     res.json(notesData);

    //     console.log("app.get");

    //     // store/write data 
    //     function updatedDB() {
    //         fs.writeFileSync(path.join(__dirname, "../db.json"),
    //         err => {
    //             if (err) throw err;
    //             return true;
    //         })
    //     };
    // });
