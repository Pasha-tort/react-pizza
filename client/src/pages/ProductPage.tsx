import React, { FC, useEffect } from 'react';

//components
import { SectionProducts } from '../components/SectionProducts';

//types
import { TypeSectionProduct } from '../components/SectionProducts/types';

type PropsProductPage = {
	typeProduct: TypeSectionProduct
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