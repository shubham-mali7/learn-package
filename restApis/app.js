// updated code

const express = require("express");
const app = express();
const port = 9500;
let cors = require("cors");
const { MongoClient } = require("mongodb");
const mongoUrl = "mongodb://0.0.0.0:27017/newProducts";
//test is the name of database in which i have the lcations collection
let db;

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
  // Send a response to the client
  try {
    const restaurantsCollection = db.collection("restaurants");
    const result = await restaurantsCollection.find().toArray();
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
