import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import useFormWithValidation from '../../utils/ValidationHook';
import { EMAIL_REGEX } from '../../utils/constants';

const Login = ({ handleLogin, handleClickLogo, headerTypechange, errorMessage }) => {
    const { handleChange, handleSubmit, values, errors, isValid } = useFormWithValidation(handleLogin)

    const navigate = useNavigate();

    useEffect(() => {
        headerTypechange("none")
    }, [])

    const handleClickMain = () => {
        handleClickLogo("main")
    }

    return (
        <main>
            <div className='form'>
                <form onSubmit={handleSubmit} className='form__content' name='login'>
                    <Link to='/' onClick={handleClickMain}>
                        <img className='form__logo' src={logo} alt='Логотип проекта' />
                    </Link>
                    <h2 className='form__header'>Рады видеть!</h2>
                    <fieldset className='form__fieldset'>
                        <div className='field'>
                            <label htmlFor='email' className='field__label'>E-mail</label>
                            <input
                                type='email'
                                className="field__input"
                                id='email'
                                name='email'
                                placeholder="Адрес электронной почты"
                                value={values?.email}
                                pattern={EMAIL_REGEX}
                                onChange={handleChange}
                                required
                                autoComplete='false'
                            />
                            {errors?.email && <p className={`field__error email-error`}>{errors.email}</p>}
                        </div>
                        <div className='field'>
                            <label htmlFor='password' className='field__label'>Пароль</label>
                            <input
                                type='password'
                                className="field__input"
                                id='password'
                                name='password'
                                placeholder="Пароль"
                                value={values?.password}
                                onChange={handleChange}
                                required
                                autoComplete='false'
                            />
                            {errors?.password && <p className={`field__error password-error`}>{errors.password}</p>}
                        </div>
                    </fieldset>
                    {errorMessage && <p className='form__error'>{errorMessage}</p>}
                    <button type="submit"
                        className={isValid ? "form__save-button form__save-button_login" : 'form__save-button form__save-button_login form__save-button_disabled'}
                        disabled={!isValid}>
                        <p className='form__buttonText'>Войти</p>
                    </button>
                    <div className="form__link">
                        <p className="form__text">Ещё не зарегистрированы?</p>
                        <Link to="/signup" className="form__text form__text_blue">Регистрация</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login;