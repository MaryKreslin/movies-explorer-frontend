import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {
    return (
        <section className='moviesCardList'>
            {props.movies.map((item) => {
                return <MoviesCard
                    data={item}
                    key={item.id}
                    onSaveClick={props.onSaveClick}
                    listType={props.listType}
                />
            })
            }
        </section>
    )
}

export default MoviesCardList;