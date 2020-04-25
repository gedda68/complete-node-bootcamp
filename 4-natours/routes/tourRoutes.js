const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

// router.param('id', tourController.checkID);

// Create a checkbody midddleware
// Check if body contains the name and price property
// IF not, send back 400 (bad request)
// Add it to the post handlet stack

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
