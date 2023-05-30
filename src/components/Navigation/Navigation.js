import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {

    const handleClickMovies = () => {
        props.handleClick("movies")
    }

    const handleClickSavedMovies = () => {
        props.handleClick("savedMovies")
    }
    return (
        <nav className='navigation'>
            <Link to='/movies' onClick={handleClickMovies} className={`navigation__text ${props.type === 'movies' ? 'navigation__text_active' : ''}`}>Фильмы</Link>
            <Link to='/saved-movies' onClick={handleClickSavedMovies} className={`navigation__text ${props.type === 'savedMovies' ? 'navigation__text_active' : ''}`}>Сохраненные фильмы</Link>
        </nav>
    )
}

export default Navigation;