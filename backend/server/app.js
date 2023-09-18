import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import pointsRouter from './routes/point';
import database_start from './services/database_service';
import cronjobService from './services/cronjob_service';

database_start()
cronjobService.run_schedule()

var app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/points', pointsRouter);

export default app;
