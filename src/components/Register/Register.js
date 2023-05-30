import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Preloader from '../Preloader/Preloader';

const Register = (props) => {
    return (
        <>
            {props.isLoading ? <Preloader /> :
                <div className='form'>
                    <form className='form__content' name='register'>
                        <img className='form__logo' src={logo} alt='Логотип' />
                        <h2 className='form__header'>Добро пожаловать!</h2>
                        <fieldset className='form__fieldset'>
                            <div className='form__field'>
                                <label for='name' className='form__label'>Имя</label>
                                <input
                                    type="text"
                                    className="form__input"
                                    id="name"
                                    name="name"
                                    placeholder="Имя"
                                    //value={}
                                    //onChange={handleChange}
                                    required
                                    autoComplete='false'
                                />
                                <p className="form__error name-error"></p>
                            </div>
                            <div className='form__field'>
                                <label for='email' className='form__label'>E-mail</label>
                                <input
                                    type="email"
                                    className="form__input"
                                    id="email"
                                    name="email"
                                    placeholder="Адрес электронной почты"
                                    //value={}
                                    //onChange={handleChange}
                                    required
                                    autoComplete='false'
                                />
                                <p className="form__error email-error"></p>
                            </div>
                            <div className='form__field'>
                                <label for='password' className='form__label'>Пароль</label>
                                <input
                                    type="password"
                                    className="form__input"
                                    id="password"
                                    name="password"
                                    placeholder="Пароль"
                                    //value={}
                                    //onChange={handleChange}
                                    required
                                    autoComplete='false'
                                />
                                <p className="form__error password-error"></p>
                            </div>
                            <button type="submit" className="form__save-button">
                                <p className='form__buttonText'>Зарегистрироваться</p>
                            </button>
                            <div className="form__link">
                                <p className="form__text">Уже зарегистрированы?</p>
                                <Link to="/signin" className="form__text form__text_blue">Войти</Link>
                            </div>
                        </fieldset>
                    </form>
                </div>
            }
        </>
    )
}

export default Register;