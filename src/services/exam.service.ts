const repository = require('../repositories/memory.repository');
const Exam = require('../models/exam.model');

class ExamService {
    getAll() {
        return repository.getExams();
    }

    getById(id) {
        return repository.getExamById(id);
    }

    create(subject, abiturientId, teacherId) {
        const exam = new Exam(Date.now().toString(), subject, abiturientId, teacherId);
        repository.addExam(exam);
        return exam;
    }

    update(id, subject, abiturientId, teacherId) {
        const exam = repository.getExamById(id);
        if (exam) {
            exam.subject = subject;
            exam.abiturientId = abiturientId;
            exam.teacherId = teacherId;
            repository.updateExam(id, exam);
            return exam;
        }
        return null;
    }

    delete(id) {
        repository.deleteExam(id);
    }
}

module.exports = new ExamService();
