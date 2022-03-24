import React from 'react';

//react-router
import { Routes, Route } from 'react-router-dom';

//components
import { LoyoutMain } from './components/Layouts/LayotMain';
import { LoyoutProduct } from './components/Layouts/LayoutProduct';
import { ProductPage } from './pages/ProductPage';
import { Footer } from './components/Footer';

//pages
import { HomePage } from './pages/HomePage';
import { NotfoundPage } from './pages/NotfoundPage';

//types
import { TypeSectionProduct } from './components/SectionProducts/types';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LoyoutMain />}>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<NotfoundPage />} />
					<Route path="pizza" element={<ProductPage typeProduct={TypeSectionProduct.pizza} />} />
					<Route path="rolls" element={<ProductPage typeProduct={TypeSectionProduct.rolls} />} />
					<Route path="snacks" element={<ProductPage typeProduct={TypeSectionProduct.snacks} />} />
					<Route path="desserts" element={<ProductPage typeProduct={TypeSectionProduct.desserts} />} />
					<Route path="drinks" element={<ProductPage typeProduct={TypeSectionProduct.drinks} />} />
					<Route path="saucess" element={<ProductPage typeProduct={TypeSectionProduct.saucess} />} />
				</Route>

				{/* <Route path="/" element={<LoyoutProduct />}>
					
				</Route> */}
			</Routes>
			<Footer />
		</>

	);
}

export default App;
