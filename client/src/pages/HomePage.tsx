import React from 'react';

//components
import { Stocks } from '../components/Stocks';
import { SectionProducts } from '../components/SectionProducts';

//types
import { TypeSectionProduct } from '../components/SectionProducts/types';

export const HomePage = () => {

	return (
		<>
			<Stocks />
			<SectionProducts typeProduct={TypeSectionProduct.pizza} number={8} />
			<SectionProducts typeProduct={TypeSectionProduct.rolls} number={8} />
			<SectionProducts typeProduct={TypeSectionProduct.snacks} number={8} filters={false} />
			<SectionProducts typeProduct={TypeSectionProduct.desserts} number={8} filters={false} />
			<SectionProducts typeProduct={TypeSectionProduct.drinks} number={8} filters={false} />
			<SectionProducts typeProduct={TypeSectionProduct.saucess} number={8} filters={false} />
		</>
	)
}