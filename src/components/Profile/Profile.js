import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Line from '../Line/Line';
import Header from '../Header/Header';
import Responsive from '../Responsive/Responsive';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { EMAIL_REGEX } from '../../utils/constants';
import useFormWithValidation from '../../utils/ValidationHook';

const Profile = (props) => {
    const navigate = useNavigate();
    const contexts = useContext(CurrentUserContext);
    const { currentUser } = contexts;
    const [isEditMode, setIsEditMode] = useState(false);
    const [error, setError] = useState("");
    const [isUserInfoChange, setIsUserInfoChange] = useState(false);

    const handleSaveInfo = () => {
        setIsEditMode(false)
        props.handleEditClick(values.name, values.email)
    }

    const { handleChange,
        handleSubmit,
        values, errors, isValid,
        setValues,
        resetForm
    } = useFormWithValidation(handleSaveInfo);

    useEffect(() => {
        setValues(currentUser)
        resetForm({ name: currentUser.name, email: currentUser.email });
    }, [currentUser]
    )

    useEffect(() => {
        if (currentUser.name === values.name && currentUser.email === values.email) {
            setIsUserInfoChange(false);
        } else {
            setIsUserInfoChange(true);
        }
    }, [currentUser, values]);

    useEffect(() => {
        setError(props.errorMessage)
    }, [props])

    const handleDeleteUser = () => {
        props.handleDeleteUser()
    }

    const handleClickEdit = () => {
        setIsEditMode(true)
        setError('')
        setValues(currentUser)
        resetForm({ name: currentUser.name, email: currentUser.email });
    }

    return (
        <>
            <Responsive element={Header} type={props.headerType} handleClick={props.handleHeaderClick} />
            <main className='profile'>
                <form className="profile__content" name='edit' onSubmit={handleSubmit}>
                    <h2 className='profile__header'>Привет, {currentUser.name}!</h2>
                    <div className='profile__lineBlock'>
                        <p className='profile__label'>Имя</p>
                        <input
                            type="text"
                            className="profile__text"
                            id="name"
                            name="name"
                            placeholder="Имя"
                            value={values?.name || currentUser.name}
                            onChange={handleChange}
                            required
                            autoComplete='false'
                            minLength={2}
                            maxLength={30}
                            disabled={!isEditMode}
                        />
                    </div>
                    <Line color='grey' isShort={true} />
                    <div className='profile__lineBlock'>
                        <p className='profile__label'>E-mail</p>
                        <input
                            type="email"
                            className="profile__text"
                            id="email"
                            name="email"
                            placeholder="Адрес электронной почты"
                            value={values?.email}
                            onChange={handleChange}
                            required
                            pattern={EMAIL_REGEX}
                            autoComplete='false'
                            disabled={!isEditMode}
                        />
                    </div>
                    <div className="popup__errorBlock">
                        {errors?.name && <p className="popup__error email-error">{errors.name}</p>}
                        {errors?.email && <p className="popup__error name-error">{errors.email}</p>}
                        {error && <p className='popup__error'> {error}</p>}
                    </div>
                    {!isEditMode &&
                        <div className='profile__buttonBlock'>
                            <button className='profile__button' onClick={handleClickEdit}>
                                <p className='profile__edittext'>Редактировать</p>
                            </button>
                            <button className='profile__button' onClick={handleDeleteUser}>
                                <Link to='/signup' className='profile__logouttext'>Выйти из аккаунта</Link>
                            </button>
                        </div>
                    }
                    {isEditMode &&
                        <>
                            <button type="submit"
                                className={(isValid && isUserInfoChange) ? "popup__save-button" : "popup__save-button popup__save-button_disabled"}
                                disabled={!isValid || !isUserInfoChange} onClick={handleSaveInfo}>
                                <p className='form__buttonText'>Сохранить</p>
                            </button>
                        </>}
                </form>
            </main>
        </>
    )
}

export default Profile;