const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
