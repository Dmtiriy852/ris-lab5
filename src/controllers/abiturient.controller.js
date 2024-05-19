const abiturientService = require('../services/abiturient.service');

class AbiturientController {
    async getAll(req, res) {
        res.json(abiturientService.getAll());
    }

    async getById(req, res) {
        const abiturient = abiturientService.getById(req.params.abiturientId);
        if (abiturient) {
            res.json(abiturient);
        } else {
            res.status(404).send('Abiturient not found');
        }
    }

    async getExams(req, res) {
        const exams = abiturientService.getExams(req.params.abiturientId);
        if (exams) {
            res.json(exams);
        } else {
            res.status(404).send('Exams not found for this abiturient');
        }
    }

    async create(req, res) {
        const abiturient = abiturientService.create(req.body.name);
        res.status(201).json(abiturient);
    }

    async update(req, res) {
        const abiturient = abiturientService.update(req.params.abiturientId, req.body.name);
        if (abiturient) {
            res.json(abiturient);
        } else {
            res.status(404).send('Abiturient not found');
        }
    }

    async delete(req, res) {
        abiturientService.delete(req.params.abiturientId);
        res.status(204).send();
    }
}

module.exports = new AbiturientController();
