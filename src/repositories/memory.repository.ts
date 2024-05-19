class MemoryRepository {
    constructor() {
        this.abiturients = [];
        this.exams = [];
        this.teachers = [];
    }

    // Methods for Abiturient
    addAbiturient(abiturient) {
        this.abiturients.push(abiturient);
    }

    getAbiturients() {
        return this.abiturients;
    }

    getAbiturientById(id) {
        return this.abiturients.find(a => a.id === id);
    }

    updateAbiturient(id, updatedAbiturient) {
        const index = this.abiturients.findIndex(a => a.id === id);
        if (index !== -1) {
            this.abiturients[index] = updatedAbiturient;
        }
    }

    deleteAbiturient(id) {
        const index = this.abiturients.findIndex(a => a.id === id);
        if (index !== -1) {
            this.abiturients.splice(index, 1);
        }
    }

    // Methods for Exam
    addExam(exam) {
        this.exams.push(exam);
    }

    getExams() {
        return this.exams;
    }

    getExamById(id) {
        return this.exams.find(e => e.id === id);
    }

    updateExam(id, updatedExam) {
        const index = this.exams.findIndex(e => e.id === id);
        if (index !== -1) {
            this.exams[index] = updatedExam;
        }
    }

    deleteExam(id) {
        const index = this.exams.findIndex(e => e.id === id);
        if (index !== -1) {
            this.exams.splice(index, 1);
        }
    }

    // Methods for Teacher
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }

    getTeachers() {
        return this.teachers;
    }

    getTeacherById(id) {
        return this.teachers.find(t => t.id === id);
    }

    updateTeacher(id, updatedTeacher) {
        const index = this.teachers.findIndex(t => t.id === id);
        if (index !== -1) {
            this.teachers[index] = updatedTeacher;
        }
    }

    deleteTeacher(id) {
        const index = this.teachers.findIndex(t => t.id === id);
        if (index !== -1) {
            this.teachers.splice(index, 1);
        }
    }
}

module.exports = new MemoryRepository();
