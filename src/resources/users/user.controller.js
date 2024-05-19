const abiturientService = require('../services/abiturient.service');

exports.getAllAbiturients = (req, res) => {
  const abiturients = abiturientService.getAllAbiturients();
  res.status(200).json(abiturients);
};

exports.getAbiturientById = (req, res) => {
  const abiturient = abiturientService.getAbiturientById(req.params.abiturientId);
  if (abiturient) {
    res.status(200).json(abiturient);
  } else {
    res.status(404).send('Abiturient not found');
  }
};

exports.getExamsByAbiturientId = (req, res) => {
  const exams = abiturientService.getExamsByAbiturientId(req.params.abiturientId);
  res.status(200).json(exams);
};

exports.createAbiturient = (req, res) => {
  const newAbiturient = abiturientService.createAbiturient(req.body);
  res.status(201).json(newAbiturient);
};

exports.updateAbiturient = (req, res) => {
  const updatedAbiturient = abiturientService.updateAbiturient(req.params.abiturientId, req.body);
  if (updatedAbiturient) {
    res.status(200).json(updatedAbiturient);
  } else {
    res.status(404).send('Abiturient not found');
  }
};

exports.deleteAbiturient = (req, res) => {
  const isDeleted = abiturientService.deleteAbiturient(req.params.abiturientId);
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).send('Abiturient not found');
  }
};
