import React, { FC, useEffect, useRef } from 'react';

//styles
import './spinner.scss';

//icons
import SpinnerSVG from '../../assets/icons/spinnerCircle.svg';

//types
type PropsSpinner = {
	loading: boolean,
}

export const SpinnerCircle: FC<PropsSpinner> = (props) => {

	useEffect(() => {
		return () => { };
	}, [props.loading]);

	if (props.loading) {
		return (
			<div className='spinner__card spinner__wrapper'>
				<img src={SpinnerSVG} alt="spinner" />
			</div>
		)
	} else {
		return null
	}


}