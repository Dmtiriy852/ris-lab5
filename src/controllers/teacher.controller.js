const teacherService = require('../services/teacher.service');

class TeacherController {
    async getAll(req, res) {
        res.json(teacherService.getAll());
    }

    async getById(req, res) {
        const teacher = teacherService.getById(req.params.teacherId);
        if (teacher) {
            res.json(teacher);
        } else {
            res.status(404).send('Teacher not found');
        }
    }

    async getExams(req, res) {
        const exams = teacherService.getExams(req.params.teacherId);
        if (exams) {
            res.json(exams);
        } else {
            res.status(404).send('Exams not found for this teacher');
        }
    }

    async create(req, res) {
        const teacher = teacherService.create(req.body.name);
        res.status(201).json(teacher);
    }

    async update(req, res) {
        const teacher = teacherService.update(req.params.teacherId, req.body.name);
        if (teacher) {
            res.json(teacher);
        } else {
            res.status(404).send('Teacher not found');
        }
    }

    async delete(req, res) {
        teacherService.delete(req.params.teacherId);
        res.status(204).send();
    }
}

module.exports = new TeacherController();
