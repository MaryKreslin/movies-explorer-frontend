import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import FormField from '../FormField/FormField';
import FormValidator from '../../utils/FormValidator';
import { validationFormConfig } from '../../utils/utils';

const Login = ({ handleLogin, handleClickLogo, headerTypechange }) => {

    const popupRef = React.useRef();

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
        <>
            <div className='form'>
                <form ref={popupRef} onSubmit={handleSubmit} className='form__content' name='login'>
                    <Link to='/' onClick={handleClickMain}>
                        <img className='form__logo' src={logo} alt='Логотип проекта' />
                    </Link>
                    <h2 className='form__header'>Рады видеть!</h2>
                    <fieldset className='form__fieldset'>
                        <FormField name="email" type="email" placeholder="Адрес электронной почты" label='E-mail' onChange={handleChange} />
                        <FormField name='password' type='password' label='Пароль' placeholder="Пароль" onChange={handleChange} />
                    </fieldset>
                    <button type="submit" className="form__save-button">
                        <p className='form__buttonText'>Войти</p>
                    </button>
                    <div className="form__link">
                        <p className="form__text">Ещё не зарегистрированы?</p>
                        <Link to="/signup" className="form__text form__text_blue">Регистрация</Link>
                    </div>


                </form>
            </div>
        </>
    )
}

export default Login;