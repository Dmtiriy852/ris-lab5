const express = require('express');
const bodyParser = require('body-parser');

const abiturientRouter = require('./routes/abiturient.router');
const examRouter = require('./routes/exam.router');
const teacherRouter = require('./routes/teacher.router');

const app = express();
app.use(bodyParser.json());

app.use('/abiturients', abiturientRouter);
app.use('/exams', examRouter);
app.use('/teachers', teacherRouter);

module.exports = app;
