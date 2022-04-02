import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//styles
import './counter.scss';

//actions
import { increment, decrement } from '../../redux/actions/actionsCart';

//types
import { DataCounter } from '../../redux/types/typesCart';

type PropsCounter = {
	data: DataCounter,
}

export const Counter: FC<PropsCounter> = ({ data }) => {

	const dispatch = useDispatch();

	useEffect(() => {
	}, [data]);

	return (
		<div className='counter'>
			<button className='counter__btn counter_dec' onClick={() => dispatch(decrement(data))}>-</button>
			<span className='counter__count'>{data.count}</span>
			<button className='counter__btn counter__inc' onClick={() => dispatch(increment(data))}>+</button>
		</div>
	)
}