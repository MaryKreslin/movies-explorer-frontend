import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (props) => {
   
    useEffect(() => {
        props.headerTypechange("none")
    }, [])

    return (
        <main className='notFoundPage'>
            <h2 className='notFoundPage__header'>404</h2>
            <p className='notFoundPage__text'>Страница не найдена</p>
            < Link to={-1} className='notFoundPage__back'>Назад</Link>
        </main>
    )
}

export default NotFoundPage;