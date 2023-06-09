import React, { useEffect } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Responsive from '../Responsive/Responsive';

const Movies = (props) => {

    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    return (
        <>
            <Responsive element={Header} type={props.headerType} handleClick={props.handleHeaderClick} />
            <main>
                <SearchForm onFindClick={props.onFindMoviesClick} />
                {props.isLoading ? <Preloader /> :
                    <>
                        <MoviesCardList
                            movies={props.movies}
                            isSaved={props.isSaved}
                            onDeleteMovie={props.handleDeleteMovieClick}
                            listType={props.listType}
                            onSaveClick={props.handleSaveMovieClick} />
                        <section className='more'>
                            {props.movies.length < foundMovies.length ?
                                <button className='more__button' onClick={props.onShowMore}>
                                    <p className='more__buttonText'>Ещё</p>
                                </button> : ''}
                        </section>
                    </>}
            </main>
            <Footer />
        </>
    )
}

export default Movies;