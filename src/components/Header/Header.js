import React from 'react';
import logo from '../../images/logo.svg';

const Header = (props) => {

    return (
        <header className='header header_main'>
            <img className='header__image' src={logo} alt='Логотип проекта' />
            <div className='header__navigation-block'>
                <p className='header__navigation-text'>Фильмы</p>
                <p className='header__navigation-text'>Сохранённые фильмы</p>
            </div>
            <div className='header__profile-block'>
                <p className='header__profile-text'>Аккаунт</p>
                <button className='header__button header__button_type_profile' />
            </div>
        </header>
    )
}

export default Header;