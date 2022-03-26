import React, { FC, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

//styles
import './modal-add-to-cart.scss';

//icons
import closeIcon from '../../../assets/icons/closeModalCard.svg';

//actions
import { defineIncludeProductsModalCard, setPriceModalCard, closeModalCard, defineDataModalCard } from '../../../redux/actions/actionsModalCard';

//types
import { R } from '../../../redux/reducers';
import { CardItem } from '../../Cards/Card';

const includeComposition = [
	{
		productName: 'Моцарелла',
		price: 59,
	},
	{
		productName: 'Шампиньоны',
		price: 49,
	},
	{
		productName: 'Красный лук',
		price: 39,
	},
	{
		productName: 'Сладкий перец',
		price: 59,
	},
]

export const ModalAddToCart: FC = () => {

	const isModalCard = (data: any): data is CardItem => {
		const { id, imgUrl, productName, price } = data;
		if (id && imgUrl && productName && price) {
			return true
		} else {
			return false
		}
	}

	const dispatch = useDispatch();
	const { dataModalCard, includeProducts, openModalCard } = useSelector((state: R) => state.reducerModalCard);
	const imgRef = useRef<HTMLImageElement>(null!);
	const modalRef = useRef<HTMLDivElement>(null!);

	useEffect(() => {

		if (openModalCard) {
			dispatch(defineIncludeProductsModalCard(includeComposition));
		}

		return () => {
			document.querySelector('body')!.classList.remove('body-overflow-hidden');
		}
	}, [openModalCard]);

	const handlerClickIncludeItem = (e: React.MouseEvent<HTMLInputElement>, index: number) => {
		dispatch(setPriceModalCard(index));
	}

	const handlerCloseModalCard = (e: React.MouseEvent<HTMLImageElement | HTMLDivElement>) => {
		if (e.target === modalRef.current || e.target === imgRef.current) {
			dispatch(closeModalCard());
			dispatch(defineDataModalCard({}));
			dispatch(defineIncludeProductsModalCard([]));
		}
	}

	if (!openModalCard) return null;
	if (!isModalCard(dataModalCard)) return null;

	const { imgUrl, productName, price } = dataModalCard;

	return ReactDOM.createPortal(
		<div ref={modalRef} className='modal' onClick={handlerCloseModalCard}>
			<div className='modal__wrapper'>
				<div className='modal__wrapper_relative'>
					<img ref={imgRef} className='modal__close' src={closeIcon} alt='close' />
					<img className='modal__img' src={imgUrl} alt={productName} />
					<div className='modal__info'>
						<h3 className='modal__title'>
							{productName}
						</h3>
						<form className='modal__form'>

							<div className='modal__form__switch'>
								<label htmlFor="typeDough1">Традиционное</label>
								<input type="radio" value="традиционное" name="typeDough" id="typeDough1" />

								<label htmlFor="typeDough1">Тоноке</label>
								<input type="radio" value="тонкое" name="typeDough" id="typeDough2" />
							</div>

							<div className='modal__form__switch'>
								<label htmlFor="radius1">20 см</label>
								<input type="radio" name="radius" id="radius1" />

								<label htmlFor="radius2">28 см</label>
								<input type="radio" name="radius" id="radius2" />

								<label htmlFor="radius3">33 см</label>
								<input type="radio" name="radius" id="radius3" />
							</div>

							<div className='modal__include'>
								<span className='modal__include__title'>
									Добавьте в пиццу
								</span>
								<ul className='modal__include__list'>
									{
										includeProducts.map((item, i) => {
											const classNameItem = item.active ? 'modal__include__item modal__include__item_active' : 'modal__include__item';
											return (
												<li key={item.productName} className={classNameItem} >
													<label className='modal__include__item__img'>
														<img />
													</label>
													<input type="checkbox" id="checbox1" onClick={(e) => handlerClickIncludeItem(e, i)} />
													<span className='modal__include__item__name'>{item.productName}</span>
													<span className='modal__inclide__item__price'>{item.price} ₽</span>
												</li>
											)
										})
									}
								</ul>
							</div>

							<div className='modal__footer'>
								<div className='modal__total-price'>
									Итого {price} ₽
								</div>
								<button className='modal__btn-submit btn btn_orange'>Добавить</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		, document.getElementById('root')!
	)

}