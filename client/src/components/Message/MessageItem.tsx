import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//icons
import closeImg from '../../assets/icons/closeModalCard.svg';

//actions
import { removeMessage } from '../../redux/actions/actionsMessage';

type PropsMessage = {
	id: string,
}

export const MessageItem: FC<PropsMessage> = ({ id }) => {

	const dispatch = useDispatch();

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(removeMessage(id));
		}, 7000);
		return () => {
			clearTimeout(timer);
		}
	}, []);

	return (
		<div className='message__item'>
			<img src={closeImg} className="message__close" alt="close" onClick={() => dispatch(removeMessage(id))} />
			<span className='message__item__text'>
				Добавлено в корзину
			</span>
		</div>
	)
}