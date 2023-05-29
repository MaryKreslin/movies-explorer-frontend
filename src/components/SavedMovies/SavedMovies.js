import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const SavedMovies = (props) => {
    return (
        <>
            <Header type={props.headerType} />
            <SearchForm />
            <MoviesCardList isSaved={true} />
            <div className='savedMovies__devider'></div>
            <Footer />
        </>
    )
}

export default SavedMovies;