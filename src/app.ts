import express, { Application } from 'express';
import bodyParser from 'body-parser';

import abiturientRouter from './routes/abiturient.router';
import examRouter from './routes/exam.router';
import teacherRouter from './routes/teacher.router';

const app: Application = express();
app.use(bodyParser.json());

app.use('/abiturients', abiturientRouter);
app.use('/exams', examRouter);
app.use('/teachers', teacherRouter);

export default app;
