import React, { FC, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';

//components
import { ModalAddToCart } from './ModalAddToCart/ModalAddToCart';
import { ModalCart } from './ModalCart/ModalCart';
import { ModalFilter } from './ModalFilter/ModalFilter';
import { ModalOrder } from './ModalOrder/ModalOrder';

//actions
import { closeModal } from '../../redux/actions/actionsModal';
import { defineDataModalCard } from '../../redux/actions/actionsModalCard';

//styles
import './modal.scss';
import './modal-right.scss';

//types
import { TypesModal } from '../../redux/types/typesModal';
import { R } from '../../redux/reducers';

export type TypeHandlerCloseModal = (e: React.MouseEvent<HTMLImageElement | HTMLDivElement | HTMLAnchorElement>, handlerElement: HTMLImageElement | HTMLDivElement | HTMLAnchorElement) => void;

export const Modal: FC = () => {

	const { typeModal, openModal } = useSelector((state: R) => state.reducerModal);
	const modalRef = useRef<HTMLDivElement>(null!);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => { };
	}, [typeModal, openModal]);

	const handlerCloseModal: TypeHandlerCloseModal = (e, handlerElement) => {
		if (e.target === handlerElement) {
			dispatch(closeModal());
			document.querySelector('body')!.classList.remove('body-overflow-hidden');
			if (typeModal === TypesModal.modalAddToCart) {
				dispatch(defineDataModalCard({}));
			}
		}
	}

	if (!openModal) return null;

	return ReactDOM.createPortal(
		<div className='modal' ref={modalRef} onClick={(e) => handlerCloseModal(e, modalRef.current)}>
			{
				typeModal === TypesModal.modalAddToCart ?
					<ModalAddToCart handlerClose={handlerCloseModal} /> : null
			}
			{
				typeModal === TypesModal.modalCart ?
					<ModalCart handlerClose={handlerCloseModal} /> : null
			}
			{
				typeModal === TypesModal.modalFilter ?
					<ModalFilter handlerClose={handlerCloseModal} /> : null
			}
			{
				typeModal === TypesModal.modalOrderSuccess ?
					<ModalOrder handlerClose={handlerCloseModal} /> : null
			}
		</div>
		, document.querySelector('#root')!
	);
}