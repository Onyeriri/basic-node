const express = require("express");

// initializing express app
const app = express();

// home route
app.get("/", (req, res) => {
  res.send("<h2>Welcome to home page...</h2>");
});

// about route
app.get("/about", (req, res) => {
  res.send("<h2>Welcome to about page...</h2>");
});

// contact route
app.get("/contact", (req, res) => {
  res.send("<h2>Welcome to contact page...</h2>");
});

// starting and listening to the server at port 5000
app.listen(5000, () => console.log("Listening to port 5000"));
