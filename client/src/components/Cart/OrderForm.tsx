import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//actions
import { openModal } from '../../redux/actions/actionsModal';
import { definitionDataModalOrder } from '../../redux/actions/actionsModalOrder';

//types
import { R } from '../../redux/reducers';
import { TypesModal } from '../../redux/types/typesModal';

export type TypeValuesClient = {
	nameClient: string,
	phone: string,
	email: string,
}

export const OrderForm: FC = () => {

	const { cart } = useSelector((state: R) => state.reducerCart);
	const dispatch = useDispatch();

	const handlerSubmit = (values: TypeValuesClient) => {
		const dataOrder = {
			dataClient: {
				nameClient: values.nameClient,
				phone: values.phone,
				email: values.email,
			},
			dataProduct: [...cart]
		}
		document.querySelector('body')!.classList.add('body-overflow-hidden');
		dispatch(openModal(TypesModal.modalOrderSuccess));
		dispatch(definitionDataModalOrder(dataOrder));
	}

	return (
		<Formik

			initialValues={{
				nameClient: '',
				phone: '',
				email: '',
			}}
			validationSchema={Yup.object({
				nameClient: Yup.string()
					.min(2, 'Минимум 2 символа')
					.required('Обязательное поле!'),
				phone: Yup.string()
					.length(10, 'Введите 10 цифр, без перовй цифры')
					.min(10, 'Введите 10 цифр, без первой цифры')
					.required('Обязательное поле!'),
				email: Yup.string()
					.email('некоректный email адресс')
					.required('Обязательное поле!'),
			})}
			onSubmit={values => handlerSubmit(values)}
		>
			<Form className="order-form">

				<div className='order-form__item'>
					<label htmlFor="nameClient">Ваше имя</label>
					<Field
						id="nameClient"
						name="nameClient"
						type="text"
						className="order-form__input"
					/>
					<ErrorMessage className="order-form__error" name="nameClient" component="div" />
				</div>

				<div className='order-form__item'>
					<label htmlFor="phone">Номер телефона</label>
					<Field
						id="phone"
						name="phone"
						type="number"
						placeholder="Введите 10 цифр, без первой цифры"
						className="order-form__input">
					</Field>
					<ErrorMessage className="order-form__error" name="phone" component="div" />
				</div>

				<div className='order-form__item'>
					<label htmlFor="email">Ваше потча</label>
					<Field
						id="email"
						name="email"
						type="text"
						className="order-form__input" />
					<ErrorMessage className="order-form__error" name="email" component="div" />
					<button className='order-form__btn btn btn_orange' type="submit">Отправить</button>
				</div>

			</Form>
		</Formik>
	)
}