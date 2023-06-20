import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Preloader from '../Preloader/Preloader';
import useFormWithValidation from '../../utils/ValidationHook';
import { EMAIL_REGEX } from '../../utils/constants';

const Register = (props) => {

    const { handleChange, handleSubmit, values, errors, isValid } = useFormWithValidation(props.handleRegister)

    useEffect(() => {
        props.headerTypechange("none")
    }, [])

    const handleClickMain = () => {
        props.handleClickLogo("main")
    }

    return (
        <main>
            {props.isLoading ? <Preloader /> :
                <div className='form'>
                    <form className='form__content' name='register' onSubmit={handleSubmit}>
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
                                    value={values?.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete='false'
                                    minLength={2}
                                    maxLength={30}
                                />
                                {errors?.name && <p className='form__error'>{errors.name}</p>}
                            </div>
                            <div className='field'>
                                <label htmlFor='email' className='field__label'>E-mail</label>
                                <input
                                    type='email'
                                    className="field__input"
                                    id='email'
                                    name='email'
                                    placeholder="Адрес электронной почты"
                                    value={values?.email}
                                    onChange={handleChange}
                                    pattern={EMAIL_REGEX}
                                    required
                                    autoComplete='false'
                                />
                                {errors?.email && <p className='form__error'>{errors.email}</p>}
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
                                {errors?.password && <p className='form__error'>{errors.password}</p>}
                            </div>
                        </fieldset>
                        {props.errorMessage && <p className='form__error'>{props.errorMessage}</p>}
                        <button type="submit"
                            className={isValid ? "form__save-button" : "form__save-button form__save-button_disabled"}
                            disabled={!isValid}>
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