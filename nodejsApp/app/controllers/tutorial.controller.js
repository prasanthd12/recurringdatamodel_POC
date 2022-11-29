const express = require("express");
const dbConfig = require("../config/db.config");
const db = require("../models");
const Tutorial = db.tutorials;

const routes = express.Router();

// Create and Save a new file
exports.create = (req, res) => {

};

// Retrieve all files from the database.
exports.findAll = (req, res) => {
  Tutorial.find({}).then(data => res.send(data));
};

// Find a single file with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Tutorial.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found file with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving file with id=" + id });
    });
};

// Update a file by the id in the request
exports.update = (req, res) => {
  
};

// Delete a file with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all files from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published files
exports.findAllPublished = (req, res) => {
  
};