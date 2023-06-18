import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {

    return (
        <section className='moviesCardList'>
            {props.movies.map((item) => {
                return <MoviesCard
                    data={item}
                    key={props.listType === 'movies' ? item.id : item.movieId}
                    checkIsSaved={props.checkIsSaved}
                    onSaveClick={props.onSaveClick}
                    onDeleteMovie={props.onDeleteMovie}
                    listType={props.listType}
                />
            })
            }
        </section>
    )
}

export default MoviesCardList;