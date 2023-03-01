// updated code

const express = require("express");
const app = express();
const port = 9500;
let cors = require("cors");
let mongo = require("mongodb");
let MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb://0.0.0.0:27017/newProducts";
//test is the name of database in which i have the lcations collection
let db;

// middleware ----> Supporting library
app.use(cors());

// Define a route for the root URL
app.get("/", (req, res) => {
  // Send a response to the client
  res.send("<h1>Hello World! from node and express in home route</h1>");
});

app.get("/location", async (req, resp) => {
  try {
    const locationCollection = db.collection("location");
    const result = await locationCollection.find().toArray();
    resp.send(result);
  } catch (err) {
    console.error("Error retrieving data from MongoDB:", err);
    resp.status(500).send("Error retrieving data from MongoDB");
  }
});

// Define a route for the /restaurants URL
app.get("/restaurants", async (req, resp) => {
  // let id = req.params.id;
  let stateId = Number(req.query.stateId);
  let mealId = Number(req.query.mealId);
  console.log(mealId + "is the mealId");
  let query = {};
  if (stateId && mealId) {
    query = { state_id: stateId, "mealTypes.mealtype_id": mealId };
  } else if (stateId) {
    query = { state_id: stateId };
  } else if (mealId) {
    query = { "mealTypes.mealtype_id": mealId };
  }

  // Send a response to the client
  try {
    const restaurantsCollection = db.collection("restaurants");
    const result = await restaurantsCollection.find(query).toArray();
    resp.send(result);
  } catch (err) {
    console.log("Error retrieving data from MongoDB:", err);
    resp.status(500).send("Error retriving data from MOngoDB");
  }
});

app.get("/filters/:mealId", async (req, resp) => {
  let query = {};
  let mealId = Number(req.params.mealId);
  let cuisineId = Number(req.query.cuisineId);
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  let sort = { cost: 1 }; // bydefault it will be in ascending order

  if (req.query.sort) {
    sort = { cost: req.query.sort };
  }

  // sort = { cost: -1 }; // sort in descending order

  if (cuisineId) {
    query = {
      "mealTypes.mealtype_id": mealId,
      "Cuisines.Cuisine_id": cuisineId,
    };
  } else if (lcost && hcost) {
    query = {
      "mealTypes.mealtype_id": mealId,
      $and: [{ cost: { $gt: lcost, $lt: hcost } }],
    };
  }
  try {
    const restaurantsCollection = db.collection("restaurants");
    const result = await restaurantsCollection.find(query).sort(sort).toArray();
    resp.send(result);
  } catch (err) {
    console.log("Error retrieving data from MongoDB:", err);
    resp.status(500).send("Error retriving data from MOngoDB");
  }
});

// Define a route for the /mealType URL
app.get("/mealType", async (req, resp) => {
  // Send a response to the client
  try {
    const restaurantsCollection = db.collection("mealType");
    const result = await restaurantsCollection.find().toArray();
    resp.send(result);
  } catch (err) {
    console.log("Error retrieving data from MongoDB:", err);
    resp.status(500).send("Error retriving data from MOngoDB");
  }
});

// Define a route for the /Cuisines URL
app.get("/Cuisines", (req, res) => {
  // Send a response to the client
  res.send("<h1>Hello World! from node and express in Cuisines route</h1>");
});

// Select restaurant on basis of _id
app.get("/details/:restId", async (req, resp) => {
  // let id = new mongo.ObjectId(req.params.restId); // ----doubt in this line
  let id = Number(req.params.restId);

  // Send a response to the client
  try {
    const restaurantsCollection = db.collection("restaurants");
    const result = await restaurantsCollection
      .find({ restaurant_id: id })
      .toArray();
    resp.send(result);
  } catch (err) {
    console.log("Error retrieving data from MongoDB:", err);
    resp.status(500).send("Error retriving data from MOngoDB");
  }
});

app.get("/menu/:restId", async (req, resp) => {
  let id = Number(req.params.restId);

  // Send a response to the client
  try {
    const restaurantsCollection = db.collection("menu");
    const result = await restaurantsCollection
      .find({ restaurant_id: id })
      .toArray();
    resp.send(result);
  } catch (err) {
    console.log("Error retrieving data from MongoDB:", err);
    resp.status(500).send("Error retriving data from MOngoDB");
  }
});

(async () => {
  const client = new MongoClient(mongoUrl);

  try {
    // Connect to MongoDB
    await client.connect();

    console.log("Connected to MongoDB");

    // Access the database
    db = client.db();

    // Start the server and listen on the specified port
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
})();
