import React from 'react';

//components
import { Header } from './components/Header';
import {Stocks} from './components/Stocks';
import {SectionProducts} from './components/SectionProducts';

function App() {
	return (
		<>
			<Header/>
			<Stocks/>
			<SectionProducts title="Пицца"/>
		</>
	);
}

export default App;
