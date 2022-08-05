const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

//routes
const authRoute = require("./routes/Auth");
const postRoute = require("./routes/Post");

//connect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to database"))
  .catch((err) => console.log(err));

//middleware
app.use(express.json());
app.use("/api/blog", authRoute);
app.use("/api/blog/posts", postRoute);

//listener
app.listen(port, () => {
  console.log(`Listening on localhost ${port}`);
});
