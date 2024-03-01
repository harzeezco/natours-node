const express = require('express');
const {
  deleteTour,
  getTour,
  createTour,
  updateTour,
  getAllTours,
} = require('../controllers/tour-controllers');

const router = express.Router();

router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
