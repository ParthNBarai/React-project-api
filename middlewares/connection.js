const mongoose = require("mongoose");

require("dotenv/config");
const con = mongoose.connect(process.env.MONGO_URL);


mongoose.connection.once("open" , ()  => {
console.log("Connected...");
}).on("error", function(error){
console.log("error is:" , error);
});

module.exports = con;
