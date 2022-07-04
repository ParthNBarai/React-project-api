const express = require("express");
const mongoose = require("mongoose");
const con = require("../middlewares/connection");
const { body, validationResult } = require('express-validator');
const userSchema = require("../schemas/resume");
con;
const router = express.Router();

router.post("/createresume", [
    body('name', 'Enter a valid Name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('mobileNo', 'Enter a valid Number').isLength({ min: 10 }),
], async (req,res) =>{

    try{
    const resume = new userSchema({
        resume : {
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            qualification : req.body.qualification,
            dob : req.body.dob,
            address : req.body.address,
            tech : req.body.tech,
            certificates : req.body.certificates,
            linkedin : req.body.linkedin
        }
    });

        const save = await resume.save();
        res.status(200).json({
            "success" : "1",
            "resume" : save
        });
    }

    catch (err){
        res.status(400).json(err);
    }
})


module.exports = router;