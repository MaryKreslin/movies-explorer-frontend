import React from 'react';
import Line from '../Line/Line';

const Profile = (props) => {
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
                    <button className='profile__button'>
                        <p className='profile__edittext'>Редактировать</p>
                    </button>
                    <button className='profile__button'>
                        <p className='profile__logouttext'>Выйти из аккаунта</p>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Profile;