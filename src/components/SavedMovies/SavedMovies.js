import React, { useEffect, useState } from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Responsive from '../Responsive/Responsive';

const SavedMovies = (props) => {

    const [movies, setMovies] = useState([]);
    const [isShort, setIsShort] = useState(false);
    const [findText, setfindText] = useState('');
   
    useEffect(() => {
        setMovies(props.movies)
    }, [setMovies, props])

    const handleFindInSaved = (findText, isShort) => {
        setfindText(findText)
        if (findText !== '' && isShort) {
            const searchedSavedMovies = props.movies.filter((item) => item.nameRU.toLowerCase().includes(findText.toLowerCase()));
            const shortSavedMovies = searchedSavedMovies.filter((item) => item.duration <= 40);
            setMovies(shortSavedMovies)
            setIsShort(true)
        } else if (findText !== '' && !isShort) {
            setMovies(props.movies.filter((item) => item.nameRU.toLowerCase().includes(findText.toLowerCase())))
            setIsShort(false)
        } else if (findText === '' && isShort) {
            setMovies(props.movies.filter((item) => item.duration <= 40))
            setIsShort(true)
        } else {
            setMovies(props.movies)
            setIsShort(false)
        }
    }

    return (
        <>
            {props.isLoading ? <Preloader /> :
                <>
                    <Responsive element={Header} type={props.headerType} handleClick={props.handleHeaderClick} />
                    <main>
                        <SearchForm onFindClick={handleFindInSaved} isShort={isShort} searchText={findText} />
                        <MoviesCardList
                            checkIsSaved={props.checkIsSaved}
                            listType={props.listType}
                            movies={movies}
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