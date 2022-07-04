const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    resume : {
        name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        phone : {
            type : String,
            required : true
        },
        qualification : {
            type : String,
            required : true
        },
        dob : {
            type : String,
            required : true
        },
        address: {
            type : String,
            required : true
        },
        tech:{
            type : String,
            required : true
        },
        certificates : {
            type : String,
            required : true
        },
        linkedin : {
            type : String,
            required : true
        }
    }
})


module.exports = mongoose.model('resume' , userSchema);