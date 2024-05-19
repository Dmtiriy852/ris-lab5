const Abiturient = require('../models/abiturient.model');
const exams = require('../data/exams'); // mock data for exams
const abiturients = []; // in-memory storage

exports.getAllAbiturients = () => abiturients;

exports.getAbiturientById = (id) => abiturients.find(abiturient => abiturient.id === id);

exports.getExamsByAbiturientId = (abiturientId) => exams.filter(exam => exam.abiturientId === abiturientId);

exports.createAbiturient = (abiturientData) => {
  const newAbiturient = new Abiturient(abiturients.length + 1, abiturientData.name, abiturientData.age);
  abiturients.push(newAbiturient);
  return newAbiturient;
};

exports.updateAbiturient = (id, abiturientData) => {
  const abiturient = abiturients.find(abiturient => abiturient.id === id);
  if (abiturient) {
    abiturient.name = abiturientData.name;
    abiturient.age = abiturientData.age;
    return abiturient;
  }
  return null;
};

exports.deleteAbiturient = (id) => {
  const index = abiturients.findIndex(abiturient => abiturient.id === id);
  if (index !== -1) {
    abiturients.splice(index, 1);
    exams.forEach(exam => {
      if (exam.abiturientId === id) {
        exam.abiturientId = null;
        if (exam.teacherId === null) {
          exams.splice(exams.indexOf(exam), 1);
        }
      }
    });
    return true;
  }
  return false;
};
