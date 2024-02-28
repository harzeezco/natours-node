const express = require('express');
const {
  deleteTour,
  getTour,
  createTour,
  updateTour,
  getAllTours,
  checkId,
  checkBodyReq,
} = require('../controllers/tour-controllers');

const router = express.Router();

router.param('id', checkId);

router.route('/').get(getAllTours).post(checkBodyReq, createTour);

router
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
