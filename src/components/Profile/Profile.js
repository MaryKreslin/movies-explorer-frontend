import React from 'react';
import { Link } from 'react-router-dom';
import Line from '../Line/Line';
import Preloader from '../Preloader/Preloader';

const Profile = (props) => {

    const handleClick = () => {
        props.handleEditClick()
    }

    return (
        <>
            <section className='profile__content'>
                <h2 className='profile__header'>Привет, {props.userName}!</h2>
                <div className='profile__lineBlock'>
                    <p className='profile__label'>Имя</p>
                    <p className='profile__text'>{props.userName}</p>
                </div>
                <Line color='grey' isShort={true} />
                <div className='profile__lineBlock'>
                    <p className='profile__label'>E-mail</p>
                    <p className='profile__text'>{props.userEmail}</p>
                </div>
                <div className='profile__buttonBlock'>
                    <button className='profile__button' onClick={handleClick}>
                        <p className='profile__edittext'>Редактировать</p>
                    </button>
                    <button className='profile__button'>
                        <Link to='/signup' className='profile__logouttext'>Выйти из аккаунта</Link>
                    </button>
                </div>
            </section>


        </>
    )
}

export default Profile;