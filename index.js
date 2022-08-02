const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

const router = require("./routers/index");

const app = express();
dotenv.config();

//connect database
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
});

//use middleware config
app.use(express.json());
app.use(cors());
app.use(morgan("common"));

//routes
app.use("/v1/api", router);

app.get('/', (req, res) => {
  res.send('Hello');
})

app.listen(3000, () => {
  console.log("Server is running!");
});