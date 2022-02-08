import React, {FC} from 'react';

//components
import { GridProducts } from '../GridProducts';
import { Card } from '../Cards';

//styles
import '../../scss/variables.scss';
import './section-products.scss';

//img & icons
import filtersIcon from '../../assets/icons/filters.svg';

//data
import {pizzaData} from '../../data/pizzaDataFayke';

type typeSectionProducts = {
	title: string,
}

export const SectionProducts: FC<typeSectionProducts> = (props) => {
	const {title} = props;

	return(
		<div className='container'>
			<div className='section-products'>
				<div className='section-products__header'>
					<h2 className='section-products__title'>
						{title}
					</h2>

					<button className='section-products__filters-btn'>
						<img className='section-products__filters-icon' src={filtersIcon} alt="filters"/>
						Фильтры
					</button>
				</div>

				<GridProducts>
					{
						pizzaData.map((item, i) => {
							return (
								<Card key={i} data={item}/>
							)
						})
					}
				</GridProducts>
			</div>
		</div>
	)
}