import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='notFoundPage'>
            <h2 className='notFoundPage__header'>404</h2>
            <p className='notFoundPage__text'>Страница не найдена</p>
            < Link to='/' className='notFoundPage__back'>Назад </Link>
        </div>
    )
}

export default NotFoundPage;