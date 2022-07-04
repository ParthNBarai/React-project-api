const express = require("express");
const app = express();
const mongoose = require("mongoose");
var con = require("./middlewares/connection");
const port = process.env.PORT || 1234;
require("dotenv/config");
const userSchema = require("./schemas/resume");
// const router = require("./routes/user");
app.use(express.json());

app.use("/api/user" , require("./routes/user"));

app.get("/" , (req,res) =>{
    res.send("Hello")
})

app.listen(port, () => console.log(`Server up and running...at ${port}`))