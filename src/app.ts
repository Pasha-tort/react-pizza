import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

import './controllers/rootController';

import { AppRouter } from './appRouter';

const app = express();

app.use(express.urlencoded({ extended: true}));

app.use('/', express.static(__dirname));
// app.use('/', express.static(path.join(__dirname, 'client', 'build')));

app.use(AppRouter.getInstance());

app.listen(3300, () => {
    console.log('Listening on port 3300')
})
