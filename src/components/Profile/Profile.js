import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Line from '../Line/Line';
import Header from '../Header/Header';
import Responsive from '../Responsive/Responsive';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import useFormWithValidation from '../../utils/ValidationHook';

const Profile = (props) => {
    const navigate = useNavigate();
    const currentUser = useContext(CurrentUserContext);
    const [isEditMode, setIsEditMode] = useState(false);
    const [error, setError] = useState("");
    const [isSuccessUpdate, setIsSuccessUpdate] = useState(false);

    const handleSaveInfo = () => {
        setIsSuccessUpdate(true)
        setIsEditMode(false)
        props.handleEditClick(values.name, values.email)
    }

    const { handleChangeName,
        handleChangeEmail,
        handleSubmit,
        values, errors, isValid,
        setValues,
    } = useFormWithValidation(handleSaveInfo);

    useEffect(() => {
        setValues(currentUser)
    }, [currentUser]
    )

    useEffect(() => {
        setError(props.errorMessage)
        //setIsSuccessUpdate(props.isSuccessUpdate)
        //setIsEditMode(props.isEditMode)
    }, [props])

    const handleDeleteUser = () => {
        props.handleDeleteUser()
    }
    const handleClickEdit = () => {
        setIsEditMode(true)
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
                            onChange={handleChangeName}
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
                            onChange={handleChangeEmail}
                            required
                            autoComplete='false'
                            disabled={!isEditMode}
                        />
                    </div>
                    {/*isSuccessUpdate && <p className='profile__label'>Данные успешно обновлены</p>*/}
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
                            <div className="popup__errorBlock">
                                {errors?.name && <p className="popup__error email-error">{errors.name}</p>}
                                {errors?.email && <p className="popup__error name-error">{errors.email}</p>}
                                <p className={`popup__error  ${error ? 'popup__error_visible' : ''} `}> {error}</p>
                            </div>
                            <button type="submit"
                                className={isValid ? "popup__save-button" : "popup__save-button popup__save-button_disabled"}
                                disabled={!isValid} onClick={handleSaveInfo}>
                                <p className='form__buttonText'>Сохранить</p>
                            </button>
                        </>}
                </form>
            </main>
        </>
    )
}

export default Profile;