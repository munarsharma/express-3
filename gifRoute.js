const express = require('express');
const axios = require('axios');

// const bodyParser = require("body-parser");
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.get('/gif', (req, res) => {
  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=OGaVltGGRCT5katku82B1s4VgQ1jno1H&limit=5`
    )
    .then(response => {
      res.gif = response.data;
      // console.log(res.gif);
      let data = response.data.data;
      let objArr = [];

      data.forEach(el => {
        objArr.push(el.images);
      });
      res.json(objArr);
      // console.log(data);
    });
});

app.get('/*', (req, res) => {
  res.json({ message: 'Error' });
});

app.listen(3000, () => {
  console.log('you are listening to port 3000');
});
