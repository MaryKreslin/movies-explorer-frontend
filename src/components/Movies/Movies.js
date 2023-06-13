import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Responsive from '../Responsive/Responsive';

const Movies = (props) => {
    const navigate = useNavigate();
    const foundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    const isShort = JSON.parse(localStorage.getItem('isShortMovie'));
    const [isFound, setIsFound] = useState(false);

    useEffect(() => {
        setIsFound(props.isFound)
    }, [props])

    return (
        <>
            <Responsive element={Header} type={props.headerType} handleClick={props.handleHeaderClick} />
            <main>
                <SearchForm onFindClick={props.onFindMoviesClick} isShort={isShort} />
                {props.isLoading ? <Preloader /> :
                    <>
                        {
                            (props.movies.length > 0) ?
                                (<>
                                    <MoviesCardList
                                        movies={props.movies}
                                        savedMovies={props.savedMovies}
                                        checkIsSaved={props.checkIsSaved}
                                        onDeleteMovie={props.handleDeleteMovieClick}
                                        listType={props.listType}
                                        onSaveClick={props.handleSaveMovieClick} />
                                    {(props.movies.length > 0) &&
                                        <section className='more'>
                                            {props.movies.length < foundMovies.length ?
                                                <button className='more__button' onClick={props.onShowMore}>
                                                    <p className='more__buttonText'>Ещё</p>
                                                </button> : ''}
                                        </section>
                                    }
                                </>) : (<p className='movies__text'>Ничего не найдено</p>)}
                    </>}
            </main>
            <Footer />
        </>
    )
}

export default Movies;