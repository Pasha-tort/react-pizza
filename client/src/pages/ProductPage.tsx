import React from 'react';
import { FC } from 'react';

//components
import { SectionProducts } from '../components/SectionProducts';

//types
import { TypeSectionProduct } from '../components/SectionProducts/types';

type PropsProductPage = {
	typeProduct: TypeSectionProduct
}

export const ProductPage: FC<PropsProductPage> = ({ typeProduct }) => {

	return (
		<>
			<SectionProducts typeProduct={typeProduct} />
		</>
	)
}