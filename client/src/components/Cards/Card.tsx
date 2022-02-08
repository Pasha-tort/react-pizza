import React, {FC} from 'react';

//styles
import './card.scss';

type typeDataCard = {
	data: {
		imgUrl: string,
		productName: string,
		composition: string[],
		price: number,
	}
}

export const Card: FC<typeDataCard> = ({data}) => {

	return(
		<>
			<li className='card'>
				<img className='card__img' src={data.imgUrl} alt={data.productName}/>
				<div className='card__desc'>
					<span className='card__product-name'>{data.productName}</span>
					<span className='card__composition'>{data.composition.join(', ')}</span>
					<div className='card__footer'>
						<button className='card__btn btn btn_orange'>Выбрать</button>
						<span className='card__price'>от {data.price} &#8381;</span>
					</div>
				</div>
			</li>
		</>
	)
}