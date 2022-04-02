import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

//styles
import './modal-add-to-cart.scss';

//components
import { ModalSwitchBlocks } from './ModalSwitchBlocks';
import { ModalIncludeProducts } from './ModalIncludeProducts';
import { SpinnerCircle } from '../../Spinner';

//icons
import closeIcon from '../../../assets/icons/closeModalCard.svg';

//actions
import { addToCart } from '../../../redux/actions/actionsCart';
import { setAdditionalPriceModalCard, defineDataModalCard, setBasePriceModalCard } from '../../../redux/actions/actionsModalCard';
import { closeModal } from '../../../redux/actions/actionsModal';
import { addMessage } from '../../../redux/actions/actionsMessage';

//types
import { TypesInputs } from '../../../redux/types/typesModalCard';
import { R } from '../../../redux/reducers';
import { isTypeCartItemExtended, TypeCartItemExtended } from '../../../redux/types/typesModalCard';
import { TypeHandlerCloseModal } from '../Modal';

export type TypeHandlerClickIncludeItem = (e: React.MouseEvent<HTMLInputElement>, index: number) => void;
export type TypeHandlerChangeRadioInput = (e: React.FormEvent<HTMLInputElement>) => void;

type PropsModal = {
	handlerClose: TypeHandlerCloseModal,
}

export const ModalAddToCart: FC<PropsModal> = ({ handlerClose }) => {

	const dispatch = useDispatch();
	const { dataModalCard } = useSelector((state: R) => state.reducerModalCard);
	const closeRef = useRef<HTMLImageElement>(null!);
	const formRef = useRef<HTMLFormElement>(null!);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		return () => { }
	}, [loading]);

	const loadImg = () => {
		setLoading(false);
	}

	const handlerClickIncludeItem: TypeHandlerClickIncludeItem = useCallback((e: React.MouseEvent<HTMLInputElement>, index: number) => {
		dispatch(setAdditionalPriceModalCard(index));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const typeDough = formData.get('typeDough');
		const radius = formData.get('radius');
		const newDataModalCard = {
			...dataModalCard as TypeCartItemExtended,
			typeDough: typeDough as string,
			radius: radius as string,
		}
		const message = {
			text: 'Добавлено в корзину',
			id: uuid(),
		}
		dispatch(defineDataModalCard(newDataModalCard))
		dispatch(addToCart(newDataModalCard));
		dispatch(addMessage(message));
		dispatch(closeModal());
		dispatch(defineDataModalCard({}));
		document.querySelector('body')!.classList.remove('body-overflow-hidden');
	}

	const handlerChangeRadioInput: TypeHandlerChangeRadioInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
		const input = e.target as HTMLInputElement;
		const parent = input.parentElement! as HTMLElement;
		const toggle = parent.querySelector('.modal__toggle')! as HTMLElement;
		const allInputCurrentType = document.querySelectorAll(`[data-type="${input.dataset['type']}"]`);

		allInputCurrentType.forEach((item, i, arr) => {
			item.previousElementSibling!.classList.remove('modal__switch__item_active');
			if (item === e.target) {
				const widthParent = +window.getComputedStyle(parent).width.match(/\d+/g)![0];
				toggle.style.left = `${widthParent / arr.length * i}px`;

				if (input.dataset['type'] === TypesInputs.radius) {
					if (!isTypeCartItemExtended(dataModalCard)) return false
					const basePrice = dataModalCard.listPrice[i];
					dispatch(setBasePriceModalCard(basePrice));
				}
			}
		});

		const label = input.previousElementSibling!;
		label.classList.add('modal__switch__item_active')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataModalCard]);

	if (!isTypeCartItemExtended(dataModalCard)) return null;

	const { imgUrl, productName, includeProducts, totalPrice, counter } = dataModalCard;

	return (
		<div className='modal__wrapper'>
			<div className='modal__wrapper_relative'>
				<img ref={closeRef} className='modal__close' src={closeIcon} alt='close' onClick={(e) => handlerClose(e, closeRef.current)} />
				<div className='modal__img__wrapper'>
					<img onLoad={loadImg} className='modal__img' src={imgUrl} alt={productName} />
					<SpinnerCircle loading={loading} />
				</div>
				<div className='modal__info'>
					<h3 className='modal__title'>
						{productName}
					</h3>
					<form ref={formRef} id="form-modal" className='modal__form' onSubmit={handlerSubmit}>

						<ModalSwitchBlocks handlerChangeRadioInput={handlerChangeRadioInput} />

						<div className='modal__include'>
							<span className='modal__include__title'>
								Добавьте в пиццу
							</span>

							<ul className='modal__include__list'>
								<ModalIncludeProducts includeProducts={includeProducts} handler={handlerClickIncludeItem} />
							</ul>
						</div>

						<div className='modal__footer'>
							<div className='modal__total-price'>
								Итого {totalPrice * counter} ₽
							</div>
							<button className='modal__btn-submit btn btn_orange' >Добавить</button>
						</div>
					</form>

				</div>
			</div>
		</div>
	)

}