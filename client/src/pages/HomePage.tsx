import React from 'react';

//components
import { Stocks } from '../components/Stocks';
import { SectionProducts } from '../components/SectionProducts';

//types
import { CardType } from '../redux/types/typesCart';

export const HomePage = () => {

	return (
		<>
			<Stocks />
			<SectionProducts typeProduct={CardType.pizza} number={8} />
			<SectionProducts typeProduct={CardType.rolls} number={8} />
			<SectionProducts typeProduct={CardType.snacks} number={8} filters={false} />
			<SectionProducts typeProduct={CardType.desserts} number={8} filters={false} />
			<SectionProducts typeProduct={CardType.drinks} number={8} filters={false} />
			<SectionProducts typeProduct={CardType.saucess} number={8} filters={false} />
		</>
	)
}