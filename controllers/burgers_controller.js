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
    req.body.burger_name, req.body.devoured === "1" ? true : false
  ], result => {
    console.log(result);
    res.redirect("/");
  });
});

// update and delete methods are not working

router.put("/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, result => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.deleteOne({
    devoured: req.body.devoured
  }, condition, result => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



module.exports = router;

// if bugs, could be with this file as well 