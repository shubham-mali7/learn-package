let express = require("express");
let app = express();
let port = 9500;
let mongo = require("mongodb");
let MongoClient = mongo.MongoClient;
let mongoUrl = "mongodb://0.0.0.0:27017/";
let db;
// mongodb://0.0.0.0:27017/
// mongodb://localhost:27017

app.get("/", (req, resp) => {
  resp.send("<h1>Hello World! from node and express in home route</h1> ");
});
app.get("/location", (req, resp) => {
  db.collection("location")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      resp.send(result);
    });
});
app.get("/Cuisines", (req, resp) => {
  resp.send("<h1>Hello World! from node and express in Cuisines route</h1> ");
});
app.get("/restaurants", (req, resp) => {
  resp.send(
    "<h1>Hello World! from node and express in restaurants route</h1> "
  );
});

// connect with mongodb
MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, dc) => {
  if (err) console.log("Error while connecting");
  db = dc.db("newProducts");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
