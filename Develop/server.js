// dependencies
var express = require("express");
// var apiRoutes = require("./routes/apiRoutes");
// var htmlRoutes = require("./routes/htmlRoutes");

// express configuration
var app = express();
var PORT = process.env.PORT || 8000;

// sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// route files
require("./routes/apiRoutes");
require("./routes/htmlRoutes");
// app.use(express.static("public"));
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);

// listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})




