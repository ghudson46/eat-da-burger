const express = require('express');

const router = express.Router();


const burger = require('../models/burger');


router.get("/", (req, res) => {
  burger.selectAll(data => {
    var hbsObject = {
      burgers: data
    };
    console.log("hbsObject:", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", (req, res) => {
  console.log('req', req.body);
  burger.insertOne([
    req.body.burger_name, req.body.devoured
  ], result => {
    console.log(result);
    res.redirect("/");
  });
});

// update and delete methods are not working

router.get("/burgers/:id", (req, res) => {
 
});

router.delete("/burgers/:id", (req, res) => {
 
     
});



module.exports = router;

// if bugs, could be with this file as well 