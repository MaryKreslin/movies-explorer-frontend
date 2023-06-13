import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import FormValidator from '../../utils/FormValidator';
import { validationFormConfig } from '../../utils/utils';

const Login = ({ handleLogin, handleClickLogo, headerTypechange, errorMessage }) => {

    const popupRef = React.useRef();
    const navigate = useNavigate();
    React.useEffect(() => {
        const LoginValidator = new FormValidator(validationFormConfig, popupRef.current);
        LoginValidator.enableValidation();
    }, [])

    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        headerTypechange("none")
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(formValue.email, formValue.password)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const handleClickMain = () => {
        handleClickLogo("main")
    }

    return (
        <main>
            <div className='form'>
                <form ref={popupRef} onSubmit={handleSubmit} className='form__content' name='login'>
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
                                value={formValue.email}
                                onChange={handleChange}
                                required
                                autoComplete='false'
                            />
                            <p className={`field__error email-error`}></p>
                        </div>
                        <div className='field'>
                            <label htmlFor='password' className='field__label'>Пароль</label>
                            <input
                                type='password'
                                className="field__input"
                                id='password'
                                name='password'
                                placeholder="Пароль"
                                value={formValue.password}
                                onChange={handleChange}
                                required
                                autoComplete='false'
                            />
                            <p className={`field__error password-error`}></p>
                        </div>
                    </fieldset>
                    <p className='field__error'>{errorMessage}</p>
                    <button type="submit" className="form__save-button form__save-button_login">
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