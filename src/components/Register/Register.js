import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Preloader from '../Preloader/Preloader';
import FormField from '../FormField/FormField';

const Register = (props) => {

    const [formValue, setFormValue] = React.useState({
        name: '',
        email: '',
        password: '',
    })

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

    return (
        <>
            {props.isLoading ? <Preloader /> :
                <div className='form'>
                    <form className='form__content' name='register' onSubmit={handleSubmit}>
                        <img className='form__logo' src={logo} alt='Логотип' />
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