import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Line from '../Line/Line';
import Header from '../Header/Header';
import Responsive from '../Responsive/Responsive';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Profile = (props) => {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]
    );

    const handleClick = () => {
        props.handleEditClick()
    }

    const handleDeleteUser = () => {
        props.handleDeleteUser()
    }

    return (
        <>
            <Responsive element={Header} type={props.headerType} handleClick={props.handleHeaderClick} />
            <main className='profile'>
                <section className='profile__content'>
                    <h2 className='profile__header'>Привет, {name}!</h2>
                    <div className='profile__lineBlock'>
                        <p className='profile__label'>Имя</p>
                        <p className='profile__text'>{name}</p>
                    </div>
                    <Line color='grey' isShort={true} />
                    <div className='profile__lineBlock'>
                        <p className='profile__label'>E-mail</p>
                        <p className='profile__text'>{email}</p>
                    </div>
                    <div className='profile__buttonBlock'>
                        <button className='profile__button' onClick={handleClick}>
                            <p className='profile__edittext'>Редактировать</p>
                        </button>
                        <button className='profile__button' onClick={handleDeleteUser}>
                            <Link to='/signup' className='profile__logouttext'>Выйти из аккаунта</Link>
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Profile;