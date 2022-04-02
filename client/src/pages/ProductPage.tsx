import React, { FC, useEffect } from 'react';

//components
import { SectionProducts } from '../components/SectionProducts';

//types
import { CardType } from '../redux/types/typesCart';

type PropsProductPage = {
	typeProduct: CardType
}

export const ProductPage: FC<PropsProductPage> = ({ typeProduct }) => {

	useEffect(() => {

	}, [typeProduct]);

	if (typeProduct === 'pizza' || typeProduct === 'rolls') {
		return (
			<>
				<SectionProducts typeProduct={typeProduct} />
			</>
		)
	} else {
		return (
			<>
				<SectionProducts typeProduct={typeProduct} filters={false} />
			</>
		)
	}


}