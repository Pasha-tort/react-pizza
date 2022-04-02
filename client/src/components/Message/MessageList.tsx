import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

//styles
import './message.scss';

//components
import { MessageItem } from './MessageItem';

//types
import { R } from '../../redux/reducers';

export const MessageList = () => {

	const { messageList } = useSelector((state: R) => state.reducerMessage);

	useEffect(() => {
		if (!messageList.length) return () => { }
	}, [messageList]);

	if (messageList.length) {
		return (
			<ul className='message__list'>
				{
					messageList.map(item => {
						return <MessageItem key={item.id} id={item.id} />
					})
				}
			</ul>
		)
	} else {
		return null;
	}

}