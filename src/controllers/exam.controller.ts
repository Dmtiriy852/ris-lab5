const examService = require('../services/exam.service');

class ExamController {
    async getAll(req, res) {
        res.json(examService.getAll());
    }

    async getById(req, res) {
        const exam = examService.getById(req.params.examId);
        if (exam) {
            res.json(exam);
        } else {
            res.status(404).send('Exam not found');
        }
    }

    async getTeachers(req, res) {
        const teachers = examService.getTeachers(req.params.examId);
        if (teachers) {
            res.json(teachers);
        } else {
            res.status(404).send('Teachers not found for this exam');
        }
    }

    async create(req, res) {
        const exam = examService.create(req.body.subject, req.body.abiturientId, req.body.teacherId);
        res.status(201).json(exam);
    }

    async update(req, res) {
        const exam = examService.update(req.params.examId, req.body.subject, req.body.abiturientId, req.body.teacherId);
        if (exam) {
            res.json(exam);
        } else {
            res.status(404).send('Exam not found');
        }
    }

    async delete(req, res) {
        examService.delete(req.params.examId);
        res.status(204).send();
    }
}

module.exports = new ExamController();
