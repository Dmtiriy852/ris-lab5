const repository = require('../repositories/memory.repository');
const Abiturient = require('../models/abiturient.model');

class AbiturientService {
    getAll() {
        return repository.getAbiturients();
    }

    getById(id) {
        return repository.getAbiturientById(id);
    }

    create(name) {
        const abiturient = new Abiturient(Date.now().toString(), name);
        repository.addAbiturient(abiturient);
        return abiturient;
    }

    update(id, name) {
        const abiturient = repository.getAbiturientById(id);
        if (abiturient) {
            abiturient.name = name;
            repository.updateAbiturient(id, abiturient);
            return abiturient;
        }
        return null;
    }

    delete(id) {
        const abiturient = repository.getAbiturientById(id);
        if (abiturient) {
            repository.deleteAbiturient(id);
            repository.getExams().forEach(exam => {
                if (exam.abiturientId === id) {
                    if (exam.teacherId === null) {
                        repository.deleteExam(exam.id);
                    } else {
                        exam.abiturientId = null;
                    }
                }
            });
        }
    }
}

module.exports = new AbiturientService();
