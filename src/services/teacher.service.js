const repository = require('../repositories/memory.repository');
const Teacher = require('../models/teacher.model');

class TeacherService {
    getAll() {
        return repository.getTeachers();
    }

    getById(id) {
        return repository.getTeacherById(id);
    }

    create(name) {
        const teacher = new Teacher(Date.now().toString(), name);
        repository.addTeacher(teacher);
        return teacher;
    }

    update(id, name) {
        const teacher = repository.getTeacherById(id);
        if (teacher) {
            teacher.name = name;
            repository.updateTeacher(id, teacher);
            return teacher;
        }
        return null;
    }

    delete(id) {
        const teacher = repository.getTeacherById(id);
        if (teacher) {
            repository.deleteTeacher(id);
            repository.getExams().forEach(exam => {
                if (exam.teacherId === id) {
                    if (exam.abiturientId === null) {
                        repository.deleteExam(exam.id);
                    } else {
                        exam.teacherId = null;
                    }
                }
            });
        }
    }
}

module.exports = new TeacherService();
