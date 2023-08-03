const express = require("express");
const messageRoutes = require("./src/messages/routes");
const app = express();
const port = process.env.PORT || 3000;
var favicon = require("serve-favicon");

const path = require("path");

app.use(favicon(path.join(__dirname, "src", "images", "favicon.ico"))); // middleware to include a favicon

// View setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

app.use(express.json()); // middleware to allow post and get json from endpoints

app.use("/", messageRoutes); // The route that leads to our message routes

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
