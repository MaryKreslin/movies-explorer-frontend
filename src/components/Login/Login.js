import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Preloader from '../Preloader/Preloader';

const Login = (props) => {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleLogin(formValue.email, formValue.password)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }
    return (
        <>
            {props.isLoading ? <Preloader /> :
                <div className='form'>
                    <form onSubmit={handleSubmit} className='form__content' name='login'>
                        <img className='form__logo' src={logo} alt='Логотип' />
                        <h2 className='form__header'>Рады видеть!</h2>
                        <fieldset className='form__fieldset'>
                            <div className='form__field'>
                                <label for='email' className='form__label'>E-mail</label>
                                <input
                                    type="email"
                                    className="form__input"
                                    id="email"
                                    name="email"
                                    placeholder="Адрес электронной почты"
                                    value={formValue.email || ""}
                                    onChange={handleChange}
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
                                    value={formValue.password || ""}
                                    onChange={handleChange}
                                    required
                                    autoComplete='false'
                                />
                                <p className="form__error password-error"></p>
                            </div>
                            <button type="submit" className="form__save-button_login">
                                <p className='form__buttonText'>Войти</p>
                            </button>
                            <div className="form__link">
                                <p className="form__text">Ещё не зарегистрированы?</p>
                                <Link to="/signup" className="form__text form__text_blue">Регистрация</Link>
                            </div>

                        </fieldset>
                    </form>
                </div>
            }
        </>
    )
}

export default Login;