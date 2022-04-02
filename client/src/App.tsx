//react-router
import { Routes, Route } from 'react-router-dom';

//components
import { LoyoutMain } from './components/Layouts/LayotMain';
import { ProductPage } from './pages/ProductPage';
import { Footer } from './components/Footer';
import { Modal } from './components/Modals/Modal';
import { MessageList } from './components/Message';

//pages
import { HomePage } from './pages/HomePage';
import { NotfoundPage } from './pages/NotfoundPage';
import { CartPage } from './pages/CartPage';

//types
import { CardType } from './redux/types/typesCart';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LoyoutMain />}>
					<Route index element={<HomePage />} />
					<Route path="pizza" element={<ProductPage typeProduct={CardType.pizza} />} />
					<Route path="rolls" element={<ProductPage typeProduct={CardType.rolls} />} />
					<Route path="snacks" element={<ProductPage typeProduct={CardType.snacks} />} />
					<Route path="desserts" element={<ProductPage typeProduct={CardType.desserts} />} />
					<Route path="drinks" element={<ProductPage typeProduct={CardType.drinks} />} />
					<Route path="saucess" element={<ProductPage typeProduct={CardType.saucess} />} />
					<Route path="cart" element={<CartPage />} />
					<Route path="*" element={<NotfoundPage />} />
				</Route>
			</Routes>
			<Footer />
			<Modal />
			<MessageList />
		</>

	);
}

export default App;
