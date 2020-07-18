// dependencies
var express = require("express");

// express configuration
var app = express();
var PORT = process.env.PORT || 8000;

// sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// route files
app.use(express.static('public'));
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})




