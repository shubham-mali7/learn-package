let express = require("express");
let app = express();
let port = 9500;

app.get("/", (req, resp) => {
  resp.send("<h1>Hello World! from node and express in home route</h1> ");
});
app.get("/location", (req, resp) => {
  resp.send("<h1>Hello World! from node and express in location route</h1> ");
});
app.get("/Cuisines", (req, resp) => {
  resp.send("<h1>Hello World! from node and express in Cuisines route</h1> ");
});
app.get("/restaurants", (req, resp) => {
  resp.send(
    "<h1>Hello World! from node and express in restaurants route</h1> "
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
