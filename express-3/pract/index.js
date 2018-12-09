const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

const logger = (req, res, next) => {
  console.log("logger has been touched");
  next();
};

const middleWere = (req, res, next) => {
  console.log(req.url);
  console.log("middleWere has been touched");
  next();
};

const getMovies = (req, res, next) => {
  axios.get("https://ghibliapi.herokuapp.com/films").then(response => {
    res.movies = response.data;
    next();
  });
};

app.use(logger);

app.get("/", middleWere, getMovies, (req, res) => {
  res.json(res.movies);
});

const port = 3000;
app.listen(port, () => {
  console.log("You are listening to port 3000");
});

// ("https://ghibliapi.herokuapp.com/films");

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post("/api/contact", (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
// });
