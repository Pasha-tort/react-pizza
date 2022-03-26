import React, { FC } from 'react';

//icons
import Spinner from '../../assets/icons/spinnerHorizontal.svg';

//types
type PropsSpinner = {
	loading: boolean,
}

export const SpinnerHorizontal: FC = () => {

	return (
		<div className='spinner__section-product'>
			<img src={Spinner} alt="spinner" />
		</div>
	)

}