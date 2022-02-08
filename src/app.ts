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

function start() {
	try {
		mongoose.connect('mongodb+srv://tort:<19990131pavlik>@cluster0.8ymh6.mongodb.net/Cluster0?retryWrites=true&w=majority', {
			dbName: 'Cluster0',
			user: 'tort',
			pass: '19990131pavlik'
		})
		
		app.listen(3300, () => {
			console.log('Listening on port 3300')
		})
	} catch(e) {
		console.log(e)
	}
}

start();


