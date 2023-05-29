import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import icon from '../../images/profile_icon.svg';

const Header = (props) => {

    const [header, setheader] = React.useState({ linkText: "", link: "", buttonText: "" });

    return (
        <header className={`header header_${props.type}`}>
            <Link to='/'> <img className='header__image' src={logo} alt='Логотип проекта' /> </Link>
            <Navigation type={props.type} />
            <div className='header__profile-block'>
                {props.type === 'main' &&
                    <>
                        <Link to='/signup' className='header__profile-text'>Регистрация</Link>
                        <Link to='/signin'>
                            <button className='header__button_type_main'>
                                <p className={`header__buttonText_type_main`}>Войти</p>
                            </button>
                        </Link>
                    </>
                }
                {(props.type === 'movies' || props.type === 'savedMovies') &&
                    <Link to='/profile'>
                        <p className='header__profile-text'>Аккаунт</p>
                        <img className='header__buttonImage' src={icon} alt='Иконка аккаунта' />
                    </Link>}
            </div>
        </header>
    )
}

export default Header;