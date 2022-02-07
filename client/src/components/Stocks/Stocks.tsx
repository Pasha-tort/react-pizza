import React, {FC} from 'react';

//img & icons
import stocks1 from '../../assets/img/stocks/stocks1.jpg';

//styles
import './stocks.scss';

export const Stocks: FC = () => {
	return (
		<div className='stocks__wrapper'>
			<div className='container'>
				<ul className='stocks__list'>
					<li className='stocks__item'>
						<img className='stcoks__img' src={stocks1} alt="stock"/>
					</li>
					<li className='stocks__item'>
						<img className='stcoks__img' src={stocks1} alt="stock"/>
					</li>
					<li className='stocks__item'>
						<img className='stcoks__img' src={stocks1} alt="stock"/>
					</li>
					<li className='stocks__item'>
						<img className='stcoks__img' src={stocks1} alt="stock"/>
					</li>
				</ul>
			</div>
		</div>
	)
}