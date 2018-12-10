const express = require("express");
const myModules = require("./mathRoutesFun.js");

const app = express();

app.get("/math/add", (req, res) => {
  let obj = {};
  obj["inp"] = req.query;
  //console.log(req.query)
  let valuesArr = Object.values(req.query);
  obj["sumString"] = valuesArr.join(" + ");
  //console.log(valuesArr)
  obj["sum"] = myModules.add(valuesArr);
  res.json(obj);
});

app.get("/math/subtract", (req, res) => {
  let obj = {};
  obj["inp"] = req.query;
  let valuesArr = Object.values(req.query);
  obj["differenceString"] = valuesArr.join(" - ");
  obj["difference"] = myModules.subtract(valuesArr);

  res.json(obj);
});

app.get("/math/multiply", (req, res) => {
  let obj = {};
  obj["inp"] = req.query;
  let valuesArr = Object.values(req.query);
  obj["productString"] = valuesArr.join(" * ");
  obj["product"] = myModules.multiply(valuesArr);

  res.json(obj);
});

app.get("/math/divide", (req, res) => {
  let obj = {};
  obj["inp"] = req.query;
  let valuesArr = Object.values(req.query);
  obj["divideString"] = valuesArr.join(" / ");
  obj["quotient"] = myModules.divide(valuesArr);

  res.json(obj);
});

app.get("/*", (req, res) => {
  res.json("Error! Try a different path");
});
app.listen(8000, () => {
  console.log("you are listening to port 8000");
});
