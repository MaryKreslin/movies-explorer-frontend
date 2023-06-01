import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import FormField from '../FormField/FormField';

const Login = ({ handleLogin }) => {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })
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


    return (
        <>
            <div className='form'>
                <form onSubmit={handleSubmit} className='form__content' name='login'>
                    <img className='form__logo' src={logo} alt='Логотип' />
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