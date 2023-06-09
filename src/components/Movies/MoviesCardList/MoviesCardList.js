import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {
   
    return (
        <section className='moviesCardList'>
            {props.movies.map((item) => {
                return <MoviesCard
                    data={item}
                    key={item.id}
                    isSaved={props.isSaved}
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