const express = require('express');
const router = express.Router();
const abiturientController = require('../controllers/abiturient.controller');

router.get('/', abiturientController.getAllAbiturients);
router.get('/:abiturientId', abiturientController.getAbiturientById);
router.get('/:abiturientId/exams', abiturientController.getExamsByAbiturientId);
router.post('/', abiturientController.createAbiturient);
router.put('/:abiturientId', abiturientController.updateAbiturient);
router.delete('/:abiturientId', abiturientController.deleteAbiturient);

module.exports = router;
