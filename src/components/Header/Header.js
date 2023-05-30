import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import icon from '../../images/profile_icon.svg';

const Header = (props) => {

    const handleClickMain = () => {
        props.handleClick("main")
    }

    const handleClickRegister = () => {
        props.handleClick("register")
    }

    const handleClickLogin = () => {
        props.handleClick("login")
    }
    const handleClickProfile = () => {
        props.handleClick("profile")
    }
    return (
        <header className={`header header_${props.type}`}>
            <Link to='/' onClick={handleClickMain}> <img className='header__image' src={logo} alt='Логотип проекта' /> </Link>
            <Navigation type={props.type} handleClick={props.handleClick} />
            <div className='header__profile-block'>
                {props.type === 'main' &&
                    <>
                        <Link to='/signup' className='header__profile-text' onClick={handleClickRegister}>Регистрация</Link>
                        <Link to='/signin' onClick={handleClickLogin}>
                            <button className='header__button_type_main'>
                                <p className={`header__buttonText_type_main`}>Войти</p>
                            </button>
                        </Link>
                    </>
                }
                {(props.type === 'movies' || props.type === 'savedMovies') &&
                    <Link to='/profile' onClick={handleClickProfile} className='header__profile-block'>
                        <p className='header__profile-text'>Аккаунт</p>
                        <img className='header__buttonImage' src={icon} alt='Иконка аккаунта' />
                    </Link>}
            </div>
        </header>
    )
}

export default Header;