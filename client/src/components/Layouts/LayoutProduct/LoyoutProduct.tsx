import { Outlet } from 'react-router-dom';
import { HeaderPages } from '../../Header';

export const LoyoutProduct = () => {

	return (
		<>
			<HeaderPages />
			<Outlet />
		</>
	)
}