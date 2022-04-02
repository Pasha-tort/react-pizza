import React, { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//styles
import './modal-filter.scss';

//actions
import { setActiveFilter } from '../../../redux/actions/actionsFilter';
import { closeModal } from '../../../redux/actions/actionsModal';

//icons
import closeModalIcons from '../../../assets/icons/closeModalRight.svg';

//types
import { TypeHandlerCloseModal } from '../Modal';
import { R } from '../../../redux/reducers';

type PropsModal = {
	handlerClose: TypeHandlerCloseModal,
}

export const ModalFilter: FC<PropsModal> = ({ handlerClose }) => {

	const dispatch = useDispatch();
	const closeRefImg = useRef<HTMLImageElement>(null!);
	const formRef = useRef<HTMLFormElement>(null!);
	const { filterData } = useSelector((state: R) => state.reducerFilter);

	const handlerChangeRadioInput = (e: React.MouseEvent<HTMLInputElement>) => {
		const input = e.target as Element;
		const label = input.previousElementSibling!;
		label.classList.toggle('modal-filter__list__item_active');
	}

	const handlerReset = () => {
		const allInput = formRef.current.querySelectorAll('input');
		allInput.forEach(item => {
			item.checked = false;
			const label = item.previousElementSibling!;
			label.classList.remove('modal-filter__list__item_active');
		});
	}

	const handlerSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		const formdata = new FormData(formRef.current);
		const filters = formdata.getAll('filters') as string[];

		if (filters.length === 0) {
			dispatch(setActiveFilter([]));
		} else {
			dispatch(setActiveFilter(filters));
		}

		dispatch(closeModal());
		document.querySelector('body')!.classList.remove('body-overflow-hidden');
	}

	return (
		<div className='modal-filter__wrapper'>
			<div className='modal-right__header'>
				<h3 className='modal-right__title'>Фильтры</h3>
				<img ref={closeRefImg} className='modal-right__close' src={closeModalIcons} alt="close" onClick={(e) => handlerClose(e, closeRefImg.current)} />
			</div>
			<form ref={formRef} id="form-modal-filter" className='modal-filter__list'>
				{
					filterData.map(item => (
						<div key={item} className='modal-filter__list__item__wrapper'>
							<label htmlFor={item} className='modal-filter__list__item'>{item}</label>
							<input id={item} name='filters' value={item} type='checkbox' onClick={handlerChangeRadioInput} />
						</div>
					))
				}
			</form>
			<div className='modal-filter__footer'>
				<button className='modal-filter__btn btn btn_orange' onClick={handlerReset}>Сбросить</button>
				<button className='modal-filter__btn btn btn_orange' onClick={handlerSubmit}>Применить</button>
			</div>
		</div>
	)
}