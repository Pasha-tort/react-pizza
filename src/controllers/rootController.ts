import {Router, Request, Response, NextFunction} from 'express';
import path from 'path';

import {get} from './decorators/routes';
import {controller} from './decorators/controller';

@controller('')
class rootController {

	@get('*')
	getAll(req: Request, res: Response): void {
		res.sendFile(path.resolve('/', 'client', 'public', 'index.html'))
	}

}
