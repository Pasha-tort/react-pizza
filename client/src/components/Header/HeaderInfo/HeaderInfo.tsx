import React, { FC } from 'react';

//styles
import './header-info.scss';

//img & icons
import authorizationIcon from '../../../assets/icons/authorization__icon.svg';
import geoLocationIcon from '../../../assets/icons/geoLocationIcon.svg';

export const HeaderInfo: FC = () => {
	return (
		<div className='container'>
			<div className='header-info__wrapper'>
				<div className='header-info__left'>

					<div className='header-info__geo-wrapper header-info__item'>
						<img className='header-info__geo__icon' src={geoLocationIcon} alt="location-icon"/>

						<select className='header-info__geo'>
							<option>Москва</option>
							<option>Санкт-Петербург</option>
							<option>Воронеж</option>
							<option>Казань</option>
							<option>Белгород</option>
						</select>

					</div>

					<button className='header-info__btn header-info__item'>
						Проверить адрес
					</button>

					<span className='header-info__item'>
						Среднее время доставки: <span className='header-info__item_bold'>00:24:19</span>
					</span>

				</div>
				<div className='header-info__right'>

					<span className="header-info__item">
						Время работы с 11:00 до 23:00
					</span>

					<div className='header-info__authorization'>
						<img className='header-info__authorization__icon' src={authorizationIcon} alt="authorization__icon"/>
						<button className='header-info__btn header-info__authorization__btn'>Войти в аккаунт</button>
					</div>

				</div>
			</div>
		</div>
	)
}