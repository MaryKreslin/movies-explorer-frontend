import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Preloader from '../Preloader/Preloader';
import FormField from '../FormField/FormField';

import FormValidator from '../../utils/FormValidator';
import { validationFormConfig } from '../../utils/utils';

const Register = (props) => {
    const popupRef = React.useRef();

    React.useEffect(() => {
        const RegisterValidator = new FormValidator(validationFormConfig, popupRef.current);
        RegisterValidator.enableValidation();
    }, [])

    const [formValue, setFormValue] = React.useState({
        name: '',
        email: '',
        password: '',
    })

    useEffect(() => {
        props.headerTypechange("none")
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(formValue)
    }

    const handleClickMain = () => {
        props.handleClickLogo("main")
    }

    return (
        <main>
            {props.isLoading ? <Preloader /> :
                <div className='form'>
                    <form ref={popupRef} className='form__content' name='register' onSubmit={handleSubmit}>
                        <Link to='/' onClick={handleClickMain}>
                            <img className='form__logo' src={logo} alt='Логотип проекта' />
                        </Link>
                        <h2 className='form__header'>Добро пожаловать!</h2>
                        <fieldset className='form__fieldset'>
                            <div className='field'>
                                <label htmlFor='name' className='field__label'>Имя</label>
                                <input
                                    type="text"
                                    className="field__input"
                                    id='name'
                                    name='name'
                                    placeholder="Имя"
                                    value={formValue.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete='false'
                                />
                                <p className={`field__error name-error`}></p>
                            </div>
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
                        <button type="submit" className="form__save-button">
                            <p className='form__buttonText'>Зарегистрироваться</p>
                        </button>
                        <div className="form__link">
                            <p className="form__text">Уже зарегистрированы?</p>
                            <Link to="/signin" className="form__text form__text_blue">Войти</Link>
                        </div>
                    </form>
                </div>
            }
        </main>
    )
}

export default Register;