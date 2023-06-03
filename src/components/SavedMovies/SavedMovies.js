import React, { useEffect } from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Responsive from '../Responsive/Responsive';

const SavedMovies = (props) => {

    return (
        <>
            {props.isLoading ? <Preloader /> :
                <>
                    <Responsive element={Header} type={props.headerType} handleClick={props.handleHeaderClick} />
                    <SearchForm />
                    <MoviesCardList isSaved={true} />
                    <div className='savedMovies__devider'></div>
                    <Footer />
                </>
            }
        </>
    )
}

export default SavedMovies;