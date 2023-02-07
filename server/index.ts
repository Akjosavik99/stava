//Dependencies
const path = require("path");

//  Server-dependencies
const express = require("express");
const app = express();
app.use(express.json());

//  DB-dependencies
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

//Define constants
const { PORT } = require("./config/config");
const { MongoURI } = require("./config/database");

//configure mongoose
mongoose.connect(
  MongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err: string) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to database");
    }
  }
);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

//Routing should be implemented here
app.get('/api', (req, res) => {
  res.json({msg: "Hello from server"})
})

// Handle all other GET-reqs
app.get('*', (req, res) => {
  res.status(404).json({ message: "404 not found"});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});