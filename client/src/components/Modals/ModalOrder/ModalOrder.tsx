import React, { FC } from 'react';
import { useSelector } from 'react-redux';

//styles
import './modal-order.scss';

//types
import { TypeHandlerCloseModal } from '../Modal';
import { R } from '../../../redux/reducers';
import { TypeCartItem, isTypeCartItemUsual } from '../../../redux/types/typesCart';
import { isTypeCartItemExtended } from '../../../redux/types/typesModalCard';

type PropsModal = {
	handlerClose: TypeHandlerCloseModal,
}

export const ModalOrder: FC<PropsModal> = ({ handlerClose }) => {

	const { dataModalOrder } = useSelector((state: R) => state.reducerModalOrder);

	if (!dataModalOrder) return null;

	return (
		<div className='modal-order__wrapper'>
			<div className='modal-order__wrapper_relative'>
				{/* <img className='modal-order__close' src={closeIcon} alt="close" /> */}
				<div className='modal-order__client-info'>
					<div className='modal-order__client-info__item'>
						<span className='modal-order__client-info__title'>
							Имя клиента:
						</span>
						<span className='modal-order__client-info__value'>
							{dataModalOrder.dataClient.nameClient}
						</span>
					</div>
					<div className='modal-order__client-info__item'>
						<span className='modal-order__client-info__title'>
							Телефон клиента:
						</span>
						<span className='modal-order__client-info__value'>
							{dataModalOrder.dataClient.phone}
						</span>
					</div>
					<div className='modal-order__client-info__item'>
						<span className='modal-order__client-info__title'>
							Почта клиента:
						</span>
						<span className='modal-order__client-info__value'>
							{dataModalOrder.dataClient.email}
						</span>
					</div>
				</div>
				<ul className='modal-order__product-list'>
					{
						dataModalOrder.dataProduct.map((item: TypeCartItem) => {
							return (
								<li key={item.type + item.id} className='modal-order__product-list__item'>
									<img className='modal-order__img' src={item.imgUrl} alt={item.productName} />
									<div className='modal-order__item__info'>
										<div className='modal-order__desc__wrapper'>
											<span className='modal-order__name'>{item.productName}</span>
											{
												isTypeCartItemExtended(item) ?
													(
														<>
															<span className='modal-order__desc'>{item.typeDough}</span>
															<span className='modal-order__desc'>{item.radius} см</span>
															<span className='modal-order__composition__list'>
																{
																	item.includeProducts ? item.includeProducts.filter(item => item.active).map(item => item.productName).join(', ') : null
																}
															</span>
														</>
													)
													: null
											}
											{
												isTypeCartItemUsual(item) ? item.composition ?
													(
														<>
															<span className='modal-order__composition__list'>{item.composition.join(', ')}</span>
															<span className='modal-order__desc'>{item.desc}</span>
														</>
													)
													:
													(
														<span className='modal-order__desc'>{item.desc}</span>
													)
													: null
											}
										</div>
										<div className='modal-order__item__footer'>
											<div className='modal-order__item__price'>{item.totalPrice * item.counter} ₽</div>
										</div>
									</div>
								</li>
							)
						})
					}
				</ul>
			</div>
		</div>
	)
}