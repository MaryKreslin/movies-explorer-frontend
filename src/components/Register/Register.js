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
        props.onSubmit(formValue.name, formValue.email, formValue.password)
    }

    const handleClickMain = () => {
        props.handleClickLogo("main")
    }

    return (
        <>
            {props.isLoading ? <Preloader /> :
                <div className='form'>
                    <form ref={popupRef} className='form__content' name='register' onSubmit={handleSubmit}>
                        <Link to='/' onClick={handleClickMain}>
                            <img className='form__logo' src={logo} alt='Логотип проекта' />
                        </Link>
                        <h2 className='form__header'>Добро пожаловать!</h2>
                        <fieldset className='form__fieldset'>
                            <FormField name='name' type='text' label='Имя' placeholder="Имя" onChange={handleChange} />
                            <FormField name='email' type='email' label='E-mail' placeholder="Адрес электронной почты" onChange={handleChange} />
                            <FormField name='password' type='password' label='Пароль' placeholder="Пароль" onChange={handleChange} />
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
        </>
    )
}

export default Register;