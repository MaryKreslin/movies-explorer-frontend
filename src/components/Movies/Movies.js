import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const Movies = (props) => {
    return (
        <>
            <SearchForm />
            <MoviesCardList />
            <section className='more'>
                <button className='more__button'>
                    <p className='more__buttonText'>Ещё</p>
                </button>
            </section>
            <Footer />
        </>
    )
}

export default Movies;