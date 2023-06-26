import React, { useEffect, useState,useContext } from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Responsive from '../Responsive/Responsive';
import {CurrentUserContext} from  '../../contexts/CurrentUserContext';
const SavedMovies = (props) => {
    const contexts = useContext(CurrentUserContext);
    const {savedMovies} = contexts;
    const [movies, setMovies] = useState([]);
    const [isShort, setIsShort] = useState(false);
    const [findText, setfindText] = useState('');

    useEffect(() => {
        setMovies(savedMovies)
      //  console.log('savedMovies', savedMovies)
       // console.log('movies', movies)
    }, [savedMovies])

      const handleFindInSaved = (findText, isShort) => {
        setfindText(findText)
        const searchedSavedMovies = savedMovies.filter((item) => item.nameRU.toLowerCase().includes(findText.toLowerCase()));
        if (isShort) {
            const shortSavedMovies = searchedSavedMovies.filter((item) => item.duration <= 40);
            setMovies(shortSavedMovies)
            setIsShort(true)
        } else {
            setMovies(searchedSavedMovies)
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