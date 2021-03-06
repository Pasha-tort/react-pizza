import 'reflect-metadata';

import { AppRouter } from '../../appRouter';

export function controller(routePrefix: string) {
	return function(target: Function) {

		const router = AppRouter.getInstance();
		
		for (let key in target.prototype) {
			const routeHandler = target.prototype[key];
			const path = Reflect.getMetadata('path', target.prototype, key);
			router.get(routePrefix + path, routeHandler);
		}
	}
}