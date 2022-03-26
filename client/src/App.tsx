import React from 'react';

//react-router
import { Routes, Route } from 'react-router-dom';

//components
import { LoyoutMain } from './components/Layouts/LayotMain';
import { ProductPage } from './pages/ProductPage';
import { Footer } from './components/Footer';
import { ModalAddToCart } from './components/Modals/ModalAddToCart/ModalAddToCart';

//pages
import { HomePage } from './pages/HomePage';
import { NotfoundPage } from './pages/NotfoundPage';
import { CartPage } from './pages/CartPage';

//types
import { TypeSectionProduct } from './components/SectionProducts/types';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LoyoutMain />}>
					<Route path="/" element={<HomePage />} />
					<Route path="pizza" element={<ProductPage typeProduct={TypeSectionProduct.pizza} />} />
					<Route path="rolls" element={<ProductPage typeProduct={TypeSectionProduct.rolls} />} />
					<Route path="snacks" element={<ProductPage typeProduct={TypeSectionProduct.snacks} />} />
					<Route path="desserts" element={<ProductPage typeProduct={TypeSectionProduct.desserts} />} />
					<Route path="drinks" element={<ProductPage typeProduct={TypeSectionProduct.drinks} />} />
					<Route path="saucess" element={<ProductPage typeProduct={TypeSectionProduct.saucess} />} />
					<Route path="cart" element={<CartPage />} />
					<Route path="*" element={<NotfoundPage />} />
				</Route>
			</Routes>
			<Footer />
			<ModalAddToCart />
		</>

	);
}

export default App;
