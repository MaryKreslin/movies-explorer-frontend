import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import icon from '../../images/profile_icon.svg';

const Header = (props) => {

    const [header, setheader] = React.useState({ linkText: "", link: "", text1: "", text2: "", buttonText: "" });

    React.useEffect(() => {
        if (props.type === "main") {
            setheader({ linkText: "Регистрация", link: "/signup", text1: "", text2: "", buttonText: "Войти" })
        }
        if (props.type === "movies") {
            setheader({ linkText: "Аккаунт", link: "/profile", text1: "Фильмы", text2: "Сохранённые фильмы", buttonText: "" })
        }
        if (props.type === "register") {
            setheader({ linkText: "", link: "", text1: "", text2: "", buttonText: "" })
        }
    }, [props.type])

    return (
        <header className={`header header_${props.type}`}>
            <img className='header__image' src={logo} alt='Логотип проекта' />
            <div className='header__navigation-block'>
                <p className='header__navigation-text'>{header.text1}</p>
                <p className='header__navigation-text'>{header.text2}</p>
            </div>
            <div className='header__profile-block'>
                <p className='header__profile-text'>{header.linkText}</p>
                <button className={`header__button header__button_type_${props.type}`}>
                    {props.type === 'main' && <p className={`header__buttonText_type${props.type}`}>{header.buttonText}</p>}
                    {props.type === 'movies' && <img className='header__buttonImage' src={icon} alt='Иконка аккаунта' />}
                </button>
            </div>
        </header>
    )
}

export default Header;