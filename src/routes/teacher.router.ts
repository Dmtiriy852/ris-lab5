const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacher.controller');

router.get('/', teacherController.getAll);
router.get('/:teacherId', teacherController.getById);
router.get('/:teacherId/exams', teacherController.getExams);
router.post('/', teacherController.create);
router.put('/:teacherId', teacherController.update);
router.delete('/:teacherId', teacherController.delete);

module.exports = router;
