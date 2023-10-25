import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import pointRouter from './routes/point';
import authRouter from './routes/auth';
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
app.use('/point', pointRouter);
app.use('/auth', authRouter);

export default app;
