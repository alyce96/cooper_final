const express = require('express');
const app = express();
 
const censusRoute = express.Router();
let Census = require('../model/Census');
 
// Get all Entries
entryRoute.route('/').get((req, res) => {
    Entry.find().then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(`Could not get entries: ${error}`);
  })
})

// Add a entry
EntryRoute.route('/add-entry').post((req, res) => {
  Entry.create(req.body).then(() => {
    console.log('Entry added successfully.');
    res.status(200);
  })
  .catch((error) => {
  console.error(`Could not save Entry: ${error}`);
  })
})

module.exports = EntryRoute;