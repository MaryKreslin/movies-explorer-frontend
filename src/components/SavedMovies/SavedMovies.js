import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const SavedMovies = (props) => {
    return (
        <>
            <SearchForm />
            <MoviesCardList isSaved={true} />
            <div className='savedMovies__devider'></div>
            <Footer />
        </>
    )
}

export default SavedMovies;