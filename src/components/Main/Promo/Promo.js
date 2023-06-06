import React from 'react';
import logo from '../../../images/landing-logo.svg';

const Promo = () => {
    return (
        <section className='promo'>
            <h1 className='promo__title'>Учебный проект студента&nbsp;факультета Веб-разработки.</h1>
            <img src={logo} className='promo__image' alt='Логотип' />
        </section>
    )
}

export default Promo;