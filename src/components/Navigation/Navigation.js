import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <div className='navigation'>
            <Link to='/movies' className={`navigation__text ${props.type === 'movies' ? 'navigation__text_active' : ''}`}>Фильмы</Link>
            <Link to='/saved-movies' className={`navigation__text ${props.type === 'savedMovies' ? 'navigation__text_active' : ''}`}>Сохраненные фильмы</Link>
        </div>
    )
}

export default Navigation;