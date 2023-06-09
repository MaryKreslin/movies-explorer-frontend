import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import icon from '../../images/profile_icon.svg';
import menuIcon from '../../images/menu-icon.svg';
import close from '../../images/CloseIcon.svg';

const Header = (props) => {
    const [isMenuOpen, setisMenuOpen] = React.useState(false);
    const [buttonMenuStyle, setbuttonMenuStyle] = React.useState({});

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
        setisMenuOpen(false);
        props.handleClick("profile")
    }

    React.useEffect(() => {
        if (!isMenuOpen) {
            setbuttonMenuStyle({
                border: 'none',
                background: 'transparent',
                backgroundImage: `url(${menuIcon})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "contain",
                width: "44px", height: "44px",
                cursor: "pointer"
            })
        }
        else {
            setbuttonMenuStyle({
                border: 'none',
                background: 'transparent',
                backgroundImage: `url(${close})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "contain",
                width: "30px", height: "30px",
                zIndex: "20",
                position: "absolute",
                top: "22.44px",
                right: "22.44px",
                cursor: "pointer"
            })
        }
        }, [isMenuOpen])

    const toggleMenuOpen = () => {
        setisMenuOpen(!isMenuOpen)
    }

    return (
        <>
            {isMenuOpen &&
                <div className='header__menu header__menu_opened'
                    onClick={(event) => event.target === event.currentTarget && setisMenuOpen(false)} >
                    <div className='header__menuContent'>
                        <Navigation type={props.type} handleClick={props.handleClick} isVertical={true} />
                        <Link to='/profile' onClick={handleClickProfile} className='header__profile-block header__profile-block_vertical'>
                            <p className='header__profile-text'>Аккаунт</p>
                            <img className='header__buttonImage' src={icon} alt='Иконка аккаунта' />
                        </Link>
                    </div>
                </div>}

            <header className={`header header_type_${props.type}`}>
                <Link to='/' onClick={handleClickMain}>
                    <img className='header__image' src={logo} alt='Логотип проекта' />
                </Link>
                {(props.type === 'main' && !props.loggedIn && props.responsiveInfo.isDesktop) &&
                    <div className='header__buttonsBlock'>
                        <Link to='/signup' className='header__profile-text' onClick={handleClickRegister}>Регистрация</Link>
                        <button className='header__button header__button_type_main'>
                            <Link to='/signin' onClick={handleClickLogin} className={`header__buttonText header__buttonText_type_main`}>Войти</Link>
                        </button>
                    </div>
                }
                {(props.type === 'main' && props.loggedIn && props.responsiveInfo.isDesktop) &&
                    <>
                        <Navigation type={props.type} handleClick={props.handleClick} isVertical={false} />
                        <Link to='/profile' onClick={handleClickProfile} className='header__profile-block'>
                            <p className='header__profile-accaunt'>Аккаунт</p>
                            <img className='header__buttonImage' src={icon} alt='Иконка аккаунта' />
                        </Link>
                    </>
                }
                {((props.type === 'movies' || props.type === 'savedMovies' || props.type === 'profile') && props.responsiveInfo.isDesktop) &&
                    <>
                        <Navigation type={props.type} handleClick={props.handleClick} isVertical={false} />
                        <Link to='/profile' onClick={handleClickProfile} className='header__profile-block'>
                            <p className='header__profile-accaunt'>Аккаунт</p>
                            <img className='header__buttonImage' src={icon} alt='Иконка аккаунта' />
                        </Link>
                    </>
                }
                {(props.type === 'main' && props.loggedIn && (props.responsiveInfo.isTablet || props.responsiveInfo.isMobile)) &&
                    <button className='header__menuButton'
                        style={buttonMenuStyle}
                        onClick={toggleMenuOpen} >
                    </button>
                }
                {((props.type === 'movies' || props.type === 'savedMovies' || props.type === 'profile')
                    && (props.responsiveInfo.isTablet || props.responsiveInfo.isMobile)) &&
                    <button className='header__menuButton'
                        style={buttonMenuStyle}
                        onClick={toggleMenuOpen} >
                    </button>
                }
            </header >
        </>
    )
}

export default Header;