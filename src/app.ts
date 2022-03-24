import express from 'express';
import path from 'path';
import mongoose from 'mongoose';


//controllers
import './controllers/productsController';
import './controllers/rootController';

//router
import { AppRouter } from './appRouter';

const app = express();

app.use(express.urlencoded({ extended: true}));
// app.use('/', express.static(__dirname));
// app.use('/', express.static(path.join(__dirname, 'client', 'build')));

app.use(AppRouter.getInstance());

function start() {
	try {
		app.listen(3300, () => {
			console.log('Listening on port 3300')
		})
	} catch(e) {
		console.log(e)
	}
}

start();


