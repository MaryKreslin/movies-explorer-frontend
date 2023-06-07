import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = (props) => {
    return (
        <>
            {
                props.isSaved &&
                <section className='moviesCardList'>
                   
                </section>
            }
            {
                !props.isSaved &&
                <section className='moviesCardList'>
                    {props.movies.map((item) => {
                        return <MoviesCard key={item.id}
                            name={item.name}
                            duration={item.duration}
                            trailer={item.trailer}
                            preview={`https://api.nomoreparties.co${item.image}`}
                        />
                    })
                    }
                </section>
            }
        </>
    )
}

export default MoviesCardList;