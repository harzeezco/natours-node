const Tour = require('../models/tour-model');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: 'Tours could not be found',
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: error,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id, {});

    res.status(200).json({
      status: 'success',
      message: 'Tour deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'The tour Id is not available',
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.updateOne(
      { _id: req.params.id },
      { $set: { price: req.body.price } },
    );

    res.status(201).json({
      status: 'success',
      data: {
        tour: tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'The tour Id is not available',
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'The tour is not available',
    });
  }
};
