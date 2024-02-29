const Tour = require('../models/tour-model');

exports.getAllTours = (req, res) => {
  res.status(200).send({
    status: 'success',
    // data: {
    //   tours,
    // },
  });
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

exports.deleteTour = (req, res) => {
  res.status(204).send({
    status: 'success',
    data: null,
  });
};

exports.updateTour = (req, res) => {
  res.status(201).send({
    status: 'success',
    data: {
      tour: '<Updated Tour>',
    },
  });
};

exports.getTour = (req, res) => {
  res.status(201).send({
    status: 'success',
    // data: {
    //   tour,
    // },
  });
};
