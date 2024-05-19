const express = require('express');
const router = express.Router();
const abiturientController = require('../controllers/abiturient.controller');

router.get('/', abiturientController.getAll);
router.get('/:abiturientId', abiturientController.getById);
router.get('/:abiturientId/exams', abiturientController.getExams);
router.post('/', abiturientController.create);
router.put('/:abiturientId', abiturientController.update);
router.delete('/:abiturientId', abiturientController.delete);

module.exports = router;
