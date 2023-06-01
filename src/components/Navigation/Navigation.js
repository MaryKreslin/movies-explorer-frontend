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
        <nav className={`navigation  ${props.isVertical ? 'navigation_vertical' : ''}`}>
            <Link to='/movies'
                onClick={handleClickMovies}
                className={`navigation__text ${(props.type === 'movies' && !props.isVertical) ? 'navigation__text_active' : 'navigation__text_vertical'} 
                ${(props.type === 'movies' && props.isVertical) ? 'navigation__text_active_vertical ' : ''}`}>Фильмы</Link>
            <Link to='/saved-movies'
                onClick={handleClickSavedMovies}
                className={`navigation__text ${(props.type === 'savedMovies' && !props.isVertical) ? 'navigation__text_active' : 'navigation__text_vertical'}
                 ${(props.type === 'savedMovies' && props.isVertical) ? 'navigation__text_active_vertical ' : ''}`}>Сохраненные фильмы</Link>
        </nav>
    )
}

export default Navigation;