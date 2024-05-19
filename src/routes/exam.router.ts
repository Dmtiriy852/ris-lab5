const express = require('express');
const router = express.Router();
const examController = require('../controllers/exam.controller');

router.get('/', examController.getAll);
router.get('/:examId', examController.getById);
router.get('/:examId/teachers', examController.getTeachers);
router.post('/', examController.create);
router.put('/:examId', examController.update);
router.delete('/:examId', examController.delete);

module.exports = router;
