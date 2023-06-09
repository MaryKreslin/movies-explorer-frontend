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
                    <main>
                        <SearchForm />
                        <MoviesCardList
                            isSaved={props.isSaved}
                            listType={props.listType}
                            movies={props.movies}
                            onDeleteMovie={props.handleDeleteMovieClick}
                        />
                        <div className='savedMovies__devider'></div>
                    </main>
                    <Footer />
                </>
            }
        </>
    )
}

export default SavedMovies;