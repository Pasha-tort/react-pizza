import React, { FC, useEffect } from 'react';

//types
import { TypeHandlerChangeRadioInput } from './ModalAddToCart';

type PropsModalSwitchBlocks = {
	handlerChangeRadioInput: TypeHandlerChangeRadioInput,
}

export const ModalSwitchBlocks: FC<PropsModalSwitchBlocks> = ({ handlerChangeRadioInput }) => {

	useEffect(() => {
	}, [handlerChangeRadioInput]);

	return (
		<>
			<div className='modal__switch'>
				<label htmlFor="typeDough1" className='modal__switch__item modal__switch__item_active'>Традиционное</label>
				<input defaultChecked className='modal__radio' data-type="dough" type="radio" value="Традиционное" name="typeDough" id="typeDough1" onChange={handlerChangeRadioInput} />

				<label htmlFor="typeDough2" className='modal__switch__item'>Тонкое</label>
				<input className='modal__radio' data-type="dough" type="radio" value="Тонкое" name="typeDough" id="typeDough2" onChange={handlerChangeRadioInput} />

				<div className='modal__toggle modal__toggle__dough'></div>
			</div>

			<div className='modal__switch'>
				<label htmlFor="radius1" className='modal__switch__item modal__switch__item_active'>20 см</label>
				<input defaultChecked className='modal__radio' data-type="radius" value="20" type="radio" name="radius" id="radius1" onChange={handlerChangeRadioInput} />

				<label htmlFor="radius2" className='modal__switch__item'>28 см</label>
				<input className='modal__radio' data-type="radius" value="28" type="radio" name="radius" id="radius2" onChange={handlerChangeRadioInput} />

				<label htmlFor="radius3" className='modal__switch__item'>33 см</label>
				<input className='modal__radio' data-type="radius" value="33" type="radio" name="radius" id="radius3" onChange={handlerChangeRadioInput} />

				<div className='modal__toggle modal__toggle__raduis'></div>
			</div>
		</>

	)
}